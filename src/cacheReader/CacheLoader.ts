import { isBrowser } from "browser-or-node";
import axios from 'axios';
import * as fs from "fs";

interface Promises {
    datFile;
    indexFiles: Array<Promise<Uint8Array>>;
    xteas;
}

interface LoadedFiles {
    datFile: Uint8Array;
    indexFiles: Array<Uint8Array>;
    xteas;
}

export default class CacheLoader {

    private onDownloadProgress;
    private datFile = "main_file_cache.dat2";
    private indexFiles = new Array(22).fill(0).map((_, i) => "main_file_cache.idx" + i).concat("main_file_cache.idx255");
    private promises: Promises = {
        datFile: undefined,
        indexFiles: new Array(),
        xteas: undefined,
    };

    constructor(path: string, onDownloadProgress) {
        this.onDownloadProgress = onDownloadProgress;

        if (this.isValidHttpUrl(path) || isBrowser) {
            this.fetchURL(path);
        } else {
            this.loadFile(path);
        }

    }

    getResults() {
        return new Promise(async resolve => {
            const datPromiseResults = await this.promises.datFile;
            const indexPromiseResults = await Promise.all(this.promises.indexFiles);
            const xteasResults = await this.promises.xteas;
            const result: LoadedFiles = {
                datFile: datPromiseResults,
                indexFiles: indexPromiseResults,
                xteas: xteasResults,
            };
            resolve(result);
        });
    }

    isValidHttpUrl(path) {
        let url;
        try {
            url = new URL(path);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    fetchURL(url: string) {
        if (url.endsWith(".zip")) {
            console.log("decompress zip file " + url);
            return;
        }

        if (!url.endsWith("/")) {
            url += "/";
        }

        this.promises.datFile = axios.get(url + this.datFile, { onDownloadProgress: this.onDownloadProgress, responseType: 'arraybuffer', }).then(x => new Uint8Array(x.data));
        this.indexFiles.forEach(indexFile => {
            this.promises.indexFiles.push(axios.get(url + indexFile, { responseType: 'arraybuffer' }).then(x => new Uint8Array(x.data)));
        });
        this.promises.xteas = axios.get(url + "xteas.json", { responseType: 'json', }).then(x => this.readXteas(x.data)).catch(e => {});
    }

    loadFile(path: string) {
        if (!path.endsWith("/")) {
            path += "/";
        }

        this.promises.datFile = new Promise(resolve => fs.readFile(path + this.datFile, (err, data) => resolve(data as Uint8Array)));
        this.indexFiles.forEach(async indexFile => {
            let newPromise: Promise<Uint8Array> = new Promise(resolve => fs.readFile(path + indexFile, (err, data) => resolve(data as Uint8Array)));
            this.promises.indexFiles.push(newPromise);
        });

        this.promises.xteas = fs.readFile(path + "xteas.json", "utf8", (err, data) => this.readXteas(data));
    }

    readXteas(xteasData) {
        if(xteasData == undefined) return;
        let xteas = JSON.parse(xteasData);
        let reOrderedXteas = {};
        for (var i = 0; i < xteas.length; i++) {
            reOrderedXteas[xteas[i].group] = xteas[i];
        }
        return reOrderedXteas;
    }
}