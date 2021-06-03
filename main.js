main();

function main(){
    cache = new Cache("");
    console.log(IndexType.valueOf(1));
    console.log(IndexType.CONFIGS.loader);
}

var test = {};
function run(){
    var allNpcFiles = cache.getAllFiles(2,9);

    for(var i=0;i<allNpcFiles.length;i++){
        var npc = new NpcLoader(allNpcFiles[i].content).load();
        if (test[npc.name] == undefined)
            test[npc.name] = 0;

        test[npc.name]++   
    }
}