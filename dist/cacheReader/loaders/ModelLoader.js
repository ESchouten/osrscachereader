export class ModelDefinition {
}
export default class ModelLoader {
    load(bytes, id) {
        let def = new ModelDefinition();
        def.id = id;
        let dataview = new DataView(bytes.buffer);
        if (dataview.getInt8(dataview.byteLength - 1) == -3 && dataview.getInt8(dataview.byteLength - 2) == -1) {
            this.load3(def, dataview);
        }
        else if (dataview.getInt8(dataview.byteLength - 1) == -2 && dataview.getInt8(dataview.byteLength - 2) == -1) {
            this.load2(def, dataview);
        }
        else if (dataview.getInt8(dataview.byteLength - 1) == -1 && dataview.getInt8(dataview.byteLength - 2) == -1) {
            this.load1(def, dataview);
        }
        else {
            this.loadOriginal(def, dataview);
        }
        this.computeNormals2(def);
        this.computeTextureUVCoordinates(def);
        this.computeAnimationTables(def);
        return def;
    }
    load3(def, var1) {
        let var2 = new DataView(var1.buffer);
        let var3 = new DataView(var1.buffer);
        let var4 = new DataView(var1.buffer);
        let var5 = new DataView(var1.buffer);
        let var6 = new DataView(var1.buffer);
        let var7 = new DataView(var1.buffer);
        let var8 = new DataView(var1.buffer);
        var2.setPosition(var1.byteLength - 26);
        let var9 = var2.readUint16();
        let var10 = var2.readUint16();
        let var11 = var2.readUint8();
        let var12 = var2.readUint8();
        let var13 = var2.readUint8();
        let var14 = var2.readUint8();
        let var15 = var2.readUint8();
        let var16 = var2.readUint8();
        let var17 = var2.readUint8();
        let var18 = var2.readUint8();
        let var19 = var2.readUint16();
        let var20 = var2.readUint16();
        let var21 = var2.readUint16();
        let var22 = var2.readUint16();
        let var23 = var2.readUint16();
        let var24 = var2.readUint16();
        let var25 = 0;
        let var26 = 0;
        let var27 = 0;
        let var28;
        if (var11 > 0) {
            def.textureRenderTypes = [];
            var2.setPosition(0);
            for (var28 = 0; var28 < var11; ++var28) {
                let var29 = def.textureRenderTypes[var28] = var2.readInt8();
                if (var29 == 0) {
                    ++var25;
                }
                if (var29 >= 1 && var29 <= 3) {
                    ++var26;
                }
                if (var29 == 2) {
                    ++var27;
                }
            }
        }
        var28 = var11 + var9;
        let var58 = var28;
        if (var12 == 1) {
            var28 += var10;
        }
        let var30 = var28;
        var28 += var10;
        let var31 = var28;
        if (var13 == 255) {
            var28 += var10;
        }
        let var32 = var28;
        if (var15 == 1) {
            var28 += var10;
        }
        let var33 = var28;
        var28 += var24;
        let var34 = var28;
        if (var14 == 1) {
            var28 += var10;
        }
        let var35 = var28;
        var28 += var22;
        let var36 = var28;
        if (var16 == 1) {
            var28 += var10 * 2;
        }
        let var37 = var28;
        var28 += var23;
        let var38 = var28;
        var28 += var10 * 2;
        let var39 = var28;
        var28 += var19;
        let var40 = var28;
        var28 += var20;
        let var41 = var28;
        var28 += var21;
        let var42 = var28;
        var28 += var25 * 6;
        let var43 = var28;
        var28 += var26 * 6;
        let var44 = var28;
        var28 += var26 * 6;
        let var45 = var28;
        var28 += var26 * 2;
        let var46 = var28;
        var28 += var26;
        let var47 = var28;
        var28 = var28 + var26 * 2 + var27 * 2;
        def.vertexCount = var9;
        def.faceCount = var10;
        def.numTextureFaces = var11;
        def.vertexPositionsX = [];
        def.vertexPositionsY = [];
        def.vertexPositionsZ = [];
        def.faceVertexIndices1 = [];
        def.faceVertexIndices2 = [];
        def.faceVertexIndices3 = [];
        if (var17 == 1) {
            def.vertexSkins = [];
        }
        if (var12 == 1) {
            def.faceRenderTypes = [];
        }
        if (var13 == 255) {
            def.faceRenderPriorities = [];
        }
        else {
            def.priority = var13;
        }
        if (var14 == 1) {
            def.faceAlphas = [];
        }
        if (var15 == 1) {
            def.faceSkins = [];
        }
        if (var16 == 1) {
            def.faceTextures = [];
        }
        if (var16 == 1 && var11 > 0) {
            def.textureCoords = [];
        }
        if (var18 == 1) {
            //def.animayaGroups = new int[var9][];
            //def.animayaScales = new int[var9][];
            def.animayaGroups = new Array(var9);
            def.animayaScales = new Array(var9);
        }
        def.faceColors = [];
        if (var11 > 0) {
            def.texIndices1 = [];
            def.texIndices2 = [];
            def.texIndices3 = [];
        }
        var2.setPosition(var11);
        var3.setPosition(var39);
        var4.setPosition(var40);
        var5.setPosition(var41);
        var6.setPosition(var33);
        let var48 = 0;
        let var49 = 0;
        let var50 = 0;
        let var51;
        let var52;
        let var53;
        let var54;
        let var55;
        for (var51 = 0; var51 < var9; ++var51) {
            var52 = var2.readUint8();
            var53 = 0;
            if ((var52 & 1) != 0) {
                var53 = var3.readShortSmart();
            }
            var54 = 0;
            if ((var52 & 2) != 0) {
                var54 = var4.readShortSmart();
            }
            var55 = 0;
            if ((var52 & 4) != 0) {
                var55 = var5.readShortSmart();
            }
            def.vertexPositionsX[var51] = var48 + var53;
            def.vertexPositionsY[var51] = var49 + var54;
            def.vertexPositionsZ[var51] = var50 + var55;
            var48 = def.vertexPositionsX[var51];
            var49 = def.vertexPositionsY[var51];
            var50 = def.vertexPositionsZ[var51];
            if (var17 == 1) {
                def.vertexSkins[var51] = var6.readUint8();
            }
        }
        if (var18 == 1) {
            for (var51 = 0; var51 < var9; ++var51) {
                var52 = var6.readUint8();
                def.animayaGroups[var51] = [];
                def.animayaScales[var51] = [];
                for (var53 = 0; var53 < var52; ++var53) {
                    def.animayaGroups[var51][var53] = var6.readUint8();
                    def.animayaScales[var51][var53] = var6.readUint8();
                }
            }
        }
        var2.setPosition(var38);
        var3.setPosition(var58);
        var4.setPosition(var31);
        var5.setPosition(var34);
        var6.setPosition(var32);
        var7.setPosition(var36);
        var8.setPosition(var37);
        for (var51 = 0; var51 < var10; ++var51) {
            def.faceColors[var51] = var2.readUint16();
            if (var12 == 1) {
                def.faceRenderTypes[var51] = var3.readInt8();
            }
            if (var13 == 255) {
                def.faceRenderPriorities[var51] = var4.readInt8();
            }
            if (var14 == 1) {
                def.faceAlphas[var51] = var5.readInt8();
            }
            if (var15 == 1) {
                def.faceSkins[var51] = var6.readUint8();
            }
            if (var16 == 1) {
                def.faceTextures[var51] = (var7.readUint16() - 1);
            }
            if (def.textureCoords != null && def.faceTextures[var51] != -1) {
                def.textureCoords[var51] = (var8.readUint16() - 1);
            }
        }
        var2.setPosition(var35);
        var3.setPosition(var30);
        var51 = 0;
        var52 = 0;
        var53 = 0;
        var54 = 0;
        let var56;
        for (var55 = 0; var55 < var10; ++var55) {
            var56 = var3.readUint8();
            if (var56 == 1) {
                var51 = var2.readShortSmart() + var54;
                var52 = var2.readShortSmart() + var51;
                var53 = var2.readShortSmart() + var52;
                var54 = var53;
                def.faceVertexIndices1[var55] = var51;
                def.faceVertexIndices2[var55] = var52;
                def.faceVertexIndices3[var55] = var53;
            }
            if (var56 == 2) {
                var52 = var53;
                var53 = var2.readShortSmart() + var54;
                var54 = var53;
                def.faceVertexIndices1[var55] = var51;
                def.faceVertexIndices2[var55] = var52;
                def.faceVertexIndices3[var55] = var53;
            }
            if (var56 == 3) {
                var51 = var53;
                var53 = var2.readShortSmart() + var54;
                var54 = var53;
                def.faceVertexIndices1[var55] = var51;
                def.faceVertexIndices2[var55] = var52;
                def.faceVertexIndices3[var55] = var53;
            }
            if (var56 == 4) {
                let var57 = var51;
                var51 = var52;
                var52 = var57;
                var53 = var2.readShortSmart() + var54;
                var54 = var53;
                def.faceVertexIndices1[var55] = var51;
                def.faceVertexIndices2[var55] = var57;
                def.faceVertexIndices3[var55] = var53;
            }
        }
        var2.setPosition(var42);
        var3.setPosition(var43);
        var4.setPosition(var44);
        var5.setPosition(var45);
        var6.setPosition(var46);
        var7.setPosition(var47);
        for (var55 = 0; var55 < var11; ++var55) {
            var56 = def.textureRenderTypes[var55] & 255;
            if (var56 == 0) {
                def.texIndices1[var55] = var2.readUint16();
                def.texIndices2[var55] = var2.readUint16();
                def.texIndices3[var55] = var2.readUint16();
            }
        }
        var2.setPosition(var28);
        var55 = var2.readUint8();
        if (var55 != 0) {
            var2.readUint16();
            var2.readUint16();
            var2.readUint16();
            var2.readInt32();
        }
    }
    load2(def, var1) {
        let var2 = false;
        let var3 = false;
        let var4 = new DataView(var1.buffer);
        let var5 = new DataView(var1.buffer);
        let var6 = new DataView(var1.buffer);
        let var7 = new DataView(var1.buffer);
        let var8 = new DataView(var1.buffer);
        var4.setPosition(var1.byteLength - 23);
        let var9 = var4.readUint16();
        let var10 = var4.readUint16();
        let var11 = var4.readUint8();
        let var12 = var4.readUint8();
        let var13 = var4.readUint8();
        let var14 = var4.readUint8();
        let var15 = var4.readUint8();
        let var16 = var4.readUint8();
        let var17 = var4.readUint8();
        let var18 = var4.readUint16();
        let var19 = var4.readUint16();
        let var20 = var4.readUint16();
        let var21 = var4.readUint16();
        let var22 = var4.readUint16();
        let var23 = 0;
        let var24 = var23 + var9;
        let var25 = var24;
        var24 += var10;
        let var26 = var24;
        if (var13 == 255) {
            var24 += var10;
        }
        let var27 = var24;
        if (var15 == 1) {
            var24 += var10;
        }
        let var28 = var24;
        if (var12 == 1) {
            var24 += var10;
        }
        let var29 = var24;
        var24 += var22;
        let var30 = var24;
        if (var14 == 1) {
            var24 += var10;
        }
        let var31 = var24;
        var24 += var21;
        let var32 = var24;
        var24 += var10 * 2;
        let var33 = var24;
        var24 += var11 * 6;
        let var34 = var24;
        var24 += var18;
        let var35 = var24;
        var24 += var19;
        let var10000 = var24 + var20;
        def.vertexCount = var9;
        def.faceCount = var10;
        def.numTextureFaces = var11;
        def.vertexPositionsX = [];
        def.vertexPositionsY = [];
        def.vertexPositionsZ = [];
        def.faceVertexIndices1 = [];
        def.faceVertexIndices2 = [];
        def.faceVertexIndices3 = [];
        if (var11 > 0) {
            def.textureRenderTypes = [];
            def.texIndices1 = [];
            def.texIndices2 = [];
            def.texIndices3 = [];
        }
        if (var16 == 1) {
            def.vertexSkins = [];
        }
        if (var12 == 1) {
            def.faceRenderTypes = [];
            def.textureCoords = [];
            def.faceTextures = [];
        }
        if (var13 == 255) {
            def.faceRenderPriorities = [];
        }
        else {
            def.priority = var13;
        }
        if (var14 == 1) {
            def.faceAlphas = [];
        }
        if (var15 == 1) {
            def.faceSkins = [];
        }
        if (var17 == 1) {
            //def.animayaGroups = new int[var9][];
            //def.animayaScales = new int[var9][];
            def.animayaGroups = [];
            def.animayaScales = [];
        }
        def.faceColors = [];
        var4.setPosition(var23);
        var5.setPosition(var34);
        var6.setPosition(var35);
        var7.setPosition(var24);
        var8.setPosition(var29);
        let var37 = 0;
        let var38 = 0;
        let var39 = 0;
        let var40;
        let var41;
        let var42;
        let var43;
        let var44;
        for (var40 = 0; var40 < var9; ++var40) {
            var41 = var4.readUint8();
            var42 = 0;
            if ((var41 & 1) != 0) {
                var42 = var5.readShortSmart();
            }
            var43 = 0;
            if ((var41 & 2) != 0) {
                var43 = var6.readShortSmart();
            }
            var44 = 0;
            if ((var41 & 4) != 0) {
                var44 = var7.readShortSmart();
            }
            def.vertexPositionsX[var40] = var37 + var42;
            def.vertexPositionsY[var40] = var38 + var43;
            def.vertexPositionsZ[var40] = var39 + var44;
            var37 = def.vertexPositionsX[var40];
            var38 = def.vertexPositionsY[var40];
            var39 = def.vertexPositionsZ[var40];
            if (var16 == 1) {
                def.vertexSkins[var40] = var8.readUint8();
            }
        }
        if (var17 == 1) {
            for (var40 = 0; var40 < var9; ++var40) {
                var41 = var8.readUint8();
                def.animayaGroups[var40] = [];
                def.animayaScales[var40] = [];
                for (var42 = 0; var42 < var41; ++var42) {
                    def.animayaGroups[var40][var42] = var8.readUint8();
                    def.animayaScales[var40][var42] = var8.readUint8();
                }
            }
        }
        var4.setPosition(var32);
        var5.setPosition(var28);
        var6.setPosition(var26);
        var7.setPosition(var30);
        var8.setPosition(var27);
        for (var40 = 0; var40 < var10; ++var40) {
            def.faceColors[var40] = var4.readUint16();
            if (var12 == 1) {
                var41 = var5.readUint8();
                if ((var41 & 1) == 1) {
                    def.faceRenderTypes[var40] = 1;
                    var2 = true;
                }
                else {
                    def.faceRenderTypes[var40] = 0;
                }
                if ((var41 & 2) == 2) {
                    def.textureCoords[var40] = (var41 >> 2);
                    def.faceTextures[var40] = def.faceColors[var40];
                    def.faceColors[var40] = 127;
                    if (def.faceTextures[var40] != -1) {
                        var3 = true;
                    }
                }
                else {
                    def.textureCoords[var40] = -1;
                    def.faceTextures[var40] = -1;
                }
            }
            if (var13 == 255) {
                def.faceRenderPriorities[var40] = var6.readInt8();
            }
            if (var14 == 1) {
                def.faceAlphas[var40] = var7.readInt8();
            }
            if (var15 == 1) {
                def.faceSkins[var40] = var8.readUint8();
            }
        }
        var4.setPosition(var31);
        var5.setPosition(var25);
        var40 = 0;
        var41 = 0;
        var42 = 0;
        var43 = 0;
        let var45;
        let var46;
        for (var44 = 0; var44 < var10; ++var44) {
            var45 = var5.readUint8();
            if (var45 == 1) {
                var40 = var4.readShortSmart() + var43;
                var41 = var4.readShortSmart() + var40;
                var42 = var4.readShortSmart() + var41;
                var43 = var42;
                def.faceVertexIndices1[var44] = var40;
                def.faceVertexIndices2[var44] = var41;
                def.faceVertexIndices3[var44] = var42;
            }
            if (var45 == 2) {
                var41 = var42;
                var42 = var4.readShortSmart() + var43;
                var43 = var42;
                def.faceVertexIndices1[var44] = var40;
                def.faceVertexIndices2[var44] = var41;
                def.faceVertexIndices3[var44] = var42;
            }
            if (var45 == 3) {
                var40 = var42;
                var42 = var4.readShortSmart() + var43;
                var43 = var42;
                def.faceVertexIndices1[var44] = var40;
                def.faceVertexIndices2[var44] = var41;
                def.faceVertexIndices3[var44] = var42;
            }
            if (var45 == 4) {
                var46 = var40;
                var40 = var41;
                var41 = var46;
                var42 = var4.readShortSmart() + var43;
                var43 = var42;
                def.faceVertexIndices1[var44] = var40;
                def.faceVertexIndices2[var44] = var46;
                def.faceVertexIndices3[var44] = var42;
            }
        }
        var4.setPosition(var33);
        for (var44 = 0; var44 < var11; ++var44) {
            def.textureRenderTypes[var44] = 0;
            def.texIndices1[var44] = var4.readUint16();
            def.texIndices2[var44] = var4.readUint16();
            def.texIndices3[var44] = var4.readUint16();
        }
        if (def.textureCoords != null) {
            let var47 = false;
            for (var45 = 0; var45 < var10; ++var45) {
                var46 = def.textureCoords[var45] & 255;
                if (var46 != 255) {
                    if (def.faceVertexIndices1[var45] == (def.texIndices1[var46] & '\uffff') && def.faceVertexIndices2[var45] == (def.texIndices2[var46] & '\uffff') && def.faceVertexIndices3[var45] == (def.texIndices3[var46] & '\uffff')) {
                        def.textureCoords[var45] = -1;
                    }
                    else {
                        var47 = true;
                    }
                }
            }
            if (!var47) {
                def.textureCoords = null;
            }
        }
        if (!var3) {
            def.faceTextures = null;
        }
        if (!var2) {
            def.faceRenderTypes = null;
        }
    }
    load1(def, var1) {
        var var2 = new DataView(var1.buffer);
        var var24 = new DataView(var1.buffer);
        var var3 = new DataView(var1.buffer);
        var var28 = new DataView(var1.buffer);
        var var6 = new DataView(var1.buffer);
        var var55 = new DataView(var1.buffer);
        var var51 = new DataView(var1.buffer);
        var2.setPosition(var1.byteLength - 23);
        var verticeCount = var2.readUint16();
        var triangleCount = var2.readUint16();
        var textureTriangleCount = var2.readUint8();
        var var13 = var2.readUint8();
        var modelPriority = var2.readUint8();
        var var50 = var2.readUint8();
        var var17 = var2.readUint8();
        var modelTexture = var2.readUint8();
        var modelVertexSkins = var2.readUint8();
        var var20 = var2.readUint16();
        var var21 = var2.readUint16();
        var var42 = var2.readUint16();
        var var22 = var2.readUint16();
        var var38 = var2.readUint16();
        var textureAmount = 0;
        var var7 = 0;
        var var29 = 0;
        var position;
        if (textureTriangleCount > 0) {
            def.textureRenderTypes = [];
            var2.setPosition(0);
            for (position = 0; position < textureTriangleCount; ++position) {
                var renderType = def.textureRenderTypes[position] = var2.readInt8();
                if (renderType == 0) {
                    ++textureAmount;
                }
                if (renderType >= 1 && renderType <= 3) {
                    ++var7;
                }
                if (renderType == 2) {
                    ++var29;
                }
            }
        }
        position = textureTriangleCount + verticeCount;
        var renderTypePos = position;
        if (var13 == 1) {
            position += triangleCount;
        }
        var var49 = position;
        position += triangleCount;
        var priorityPos = position;
        if (modelPriority == 255) {
            position += triangleCount;
        }
        var triangleSkinPos = position;
        if (var17 == 1) {
            position += triangleCount;
        }
        var var35 = position;
        if (modelVertexSkins == 1) {
            position += verticeCount;
        }
        var alphaPos = position;
        if (var50 == 1) {
            position += triangleCount;
        }
        var var11 = position;
        position += var22;
        var texturePos = position;
        if (modelTexture == 1) {
            position += triangleCount * 2;
        }
        var textureCoordPos = position;
        position += var38;
        var colorPos = position;
        position += triangleCount * 2;
        var var40 = position;
        position += var20;
        var var41 = position;
        position += var21;
        var var8 = position;
        position += var42;
        var var43 = position;
        position += textureAmount * 6;
        var var37 = position;
        position += var7 * 6;
        var var48 = position;
        position += var7 * 6;
        var var56 = position;
        position += var7 * 2;
        var var45 = position;
        position += var7;
        var var46 = position;
        position += var7 * 2 + var29 * 2;
        def.vertexCount = verticeCount;
        def.faceCount = triangleCount;
        def.textureTriangleCount = textureTriangleCount;
        def.vertexPositionsX = [];
        def.vertexPositionsY = [];
        def.vertexPositionsZ = [];
        def.faceVertexIndices1 = [];
        def.faceVertexIndices2 = [];
        def.faceVertexIndices3 = [];
        if (modelVertexSkins == 1) {
            def.vertexSkins = [];
        }
        if (var13 == 1) {
            def.faceRenderTypes = [];
        }
        if (modelPriority == 255) {
            def.faceRenderPriorities = [];
        }
        else {
            def.priority = modelPriority;
            def.faceRenderPriorities = Array(def.faceCount).fill(modelPriority);
        }
        if (var50 == 1) {
            def.faceAlphas = [];
        }
        if (var17 == 1) {
            def.faceSkins = [];
        }
        if (modelTexture == 1) {
            def.faceTextures = [];
        }
        if (modelTexture == 1 && textureTriangleCount > 0) {
            def.textureCoordinates = [];
        }
        def.faceColors = [];
        if (textureTriangleCount > 0) {
            def.textureTriangleVertexIndices1 = [];
            def.textureTriangleVertexIndices2 = [];
            def.textureTriangleVertexIndices3 = [];
            if (var7 > 0) {
                def.aShortArray2574 = [];
                def.aShortArray2575 = [];
                def.aShortArray2586 = [];
                def.aShortArray2577 = [];
                def.aByteArray2580 = [];
                def.aShortArray2578 = [];
            }
            if (var29 > 0) {
                def.texturePrimaryColors = [];
            }
        }
        var2.setPosition(textureTriangleCount);
        var24.setPosition(var40);
        var3.setPosition(var41);
        var28.setPosition(var8);
        var6.setPosition(var35);
        var vX = 0;
        var vY = 0;
        var vZ = 0;
        var vertexZOffset;
        var var10;
        var vertexYOffset;
        var var15;
        var point;
        for (point = 0; point < verticeCount; ++point) {
            var vertexFlags = var2.readUint8();
            var vertexXOffset = 0;
            if ((vertexFlags & 1) != 0) {
                vertexXOffset = var24.readShortSmart();
            }
            vertexYOffset = 0;
            if ((vertexFlags & 2) != 0) {
                vertexYOffset = var3.readShortSmart();
            }
            vertexZOffset = 0;
            if ((vertexFlags & 4) != 0) {
                vertexZOffset = var28.readShortSmart();
            }
            def.vertexPositionsX[point] = vX + vertexXOffset;
            def.vertexPositionsY[point] = vY + vertexYOffset;
            def.vertexPositionsZ[point] = vZ + vertexZOffset;
            vX = def.vertexPositionsX[point];
            vY = def.vertexPositionsY[point];
            vZ = def.vertexPositionsZ[point];
            if (modelVertexSkins == 1) {
                def.vertexSkins[point] = var6.readUint8();
            }
        }
        var2.setPosition(colorPos);
        var24.setPosition(renderTypePos);
        var3.setPosition(priorityPos);
        var28.setPosition(alphaPos);
        var6.setPosition(triangleSkinPos);
        var55.setPosition(texturePos);
        var51.setPosition(textureCoordPos);
        for (point = 0; point < triangleCount; ++point) {
            def.faceColors[point] = var2.readUint16();
            if (var13 == 1) {
                def.faceRenderTypes[point] = var24.readInt8();
            }
            if (modelPriority == 255) {
                def.faceRenderPriorities[point] = var3.readInt8();
            }
            if (var50 == 1) {
                def.faceAlphas[point] = var28.readInt8();
            }
            if (var17 == 1) {
                def.faceSkins[point] = var6.readUint8();
            }
            if (modelTexture == 1) {
                def.faceTextures[point] = (var55.readUint16() - 1);
            }
            if (def.textureCoordinates != null && def.faceTextures[point] != -1) {
                def.textureCoordinates[point] = (var51.readUint8() - 1);
            }
        }
        var2.setPosition(var11);
        var24.setPosition(var49);
        var trianglePointX = 0;
        var trianglePointY = 0;
        var trianglePointZ = 0;
        vertexYOffset = 0;
        var var16;
        for (vertexZOffset = 0; vertexZOffset < triangleCount; ++vertexZOffset) {
            var numFaces = var24.readUint8();
            if (numFaces == 1) {
                trianglePointX = var2.readShortSmart() + vertexYOffset;
                trianglePointY = var2.readShortSmart() + trianglePointX;
                trianglePointZ = var2.readShortSmart() + trianglePointY;
                vertexYOffset = trianglePointZ;
                def.faceVertexIndices1[vertexZOffset] = trianglePointX;
                def.faceVertexIndices2[vertexZOffset] = trianglePointY;
                def.faceVertexIndices3[vertexZOffset] = trianglePointZ;
            }
            if (numFaces == 2) {
                trianglePointY = trianglePointZ;
                trianglePointZ = var2.readShortSmart() + vertexYOffset;
                vertexYOffset = trianglePointZ;
                def.faceVertexIndices1[vertexZOffset] = trianglePointX;
                def.faceVertexIndices2[vertexZOffset] = trianglePointY;
                def.faceVertexIndices3[vertexZOffset] = trianglePointZ;
            }
            if (numFaces == 3) {
                trianglePointX = trianglePointZ;
                trianglePointZ = var2.readShortSmart() + vertexYOffset;
                vertexYOffset = trianglePointZ;
                def.faceVertexIndices1[vertexZOffset] = trianglePointX;
                def.faceVertexIndices2[vertexZOffset] = trianglePointY;
                def.faceVertexIndices3[vertexZOffset] = trianglePointZ;
            }
            if (numFaces == 4) {
                var var57 = trianglePointX;
                trianglePointX = trianglePointY;
                trianglePointY = var57;
                trianglePointZ = var2.readShortSmart() + vertexYOffset;
                vertexYOffset = trianglePointZ;
                def.faceVertexIndices1[vertexZOffset] = trianglePointX;
                def.faceVertexIndices2[vertexZOffset] = var57;
                def.faceVertexIndices3[vertexZOffset] = trianglePointZ;
            }
        }
        var2.setPosition(var43);
        var24.setPosition(var37);
        var3.setPosition(var48);
        var28.setPosition(var56);
        var6.setPosition(var45);
        var55.setPosition(var46);
        for (var texIndex = 0; texIndex < textureTriangleCount; ++texIndex) {
            var type = def.textureRenderTypes[texIndex] & 255;
            if (type == 0) {
                def.textureTriangleVertexIndices1[texIndex] = var2.readUint16();
                def.textureTriangleVertexIndices2[texIndex] = var2.readUint16();
                def.textureTriangleVertexIndices3[texIndex] = var2.readUint16();
            }
            if (type == 1) {
                def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
                def.aShortArray2574[texIndex] = var3.readUint16();
                def.aShortArray2575[texIndex] = var3.readUint16();
                def.aShortArray2586[texIndex] = var3.readUint16();
                def.aShortArray2577[texIndex] = var28.readUint16();
                def.aByteArray2580[texIndex] = var6.readInt8();
                def.aShortArray2578[texIndex] = var55.readUint16();
            }
            if (type == 2) {
                def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
                def.aShortArray2574[texIndex] = var3.readUint16();
                def.aShortArray2575[texIndex] = var3.readUint16();
                def.aShortArray2586[texIndex] = var3.readUint16();
                def.aShortArray2577[texIndex] = var28.readUint16();
                def.aByteArray2580[texIndex] = var6.readInt8();
                def.aShortArray2578[texIndex] = var55.readUint16();
                def.texturePrimaryColors[texIndex] = var55.readUint16();
            }
            if (type == 3) {
                def.textureTriangleVertexIndices1[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices2[texIndex] = var24.readUint16();
                def.textureTriangleVertexIndices3[texIndex] = var24.readUint16();
                def.aShortArray2574[texIndex] = var3.readUint16();
                def.aShortArray2575[texIndex] = var3.readUint16();
                def.aShortArray2586[texIndex] = var3.readUint16();
                def.aShortArray2577[texIndex] = var28.readUint16();
                def.aByteArray2580[texIndex] = var6.readInt8();
                def.aShortArray2578[texIndex] = var55.readUint16();
            }
        }
        var2.setPosition(position);
        vertexZOffset = var2.readUint8();
        if (vertexZOffset != 0) {
            //new Class41();
            var2.readUint16();
            var2.readUint16();
            var2.readUint16();
            var2.readInt32();
        }
    }
    loadOriginal(def, var1) {
        var var2 = false;
        var var43 = false;
        var var5 = new DataView(var1.buffer);
        var var39 = new DataView(var1.buffer);
        var var26 = new DataView(var1.buffer);
        var var9 = new DataView(var1.buffer);
        var var3 = new DataView(var1.buffer);
        var5.setPosition(var1.byteLength - 18);
        var var10 = var5.readUint16();
        var var11 = var5.readUint16();
        var var12 = var5.readUint8();
        var var13 = var5.readUint8();
        var var14 = var5.readUint8();
        var var30 = var5.readUint8();
        var var15 = var5.readUint8();
        var var28 = var5.readUint8();
        var var27 = var5.readUint16();
        var var20 = var5.readUint16();
        var var36 = var5.readUint16();
        var var23 = var5.readUint16();
        var var16 = 0;
        var var46 = var16 + var10;
        var var24 = var46;
        var46 += var11;
        var var25 = var46;
        if (var14 == 255) {
            var46 += var11;
        }
        var var4 = var46;
        if (var15 == 1) {
            var46 += var11;
        }
        var var42 = var46;
        if (var13 == 1) {
            var46 += var11;
        }
        var var37 = var46;
        if (var28 == 1) {
            var46 += var10;
        }
        var var29 = var46;
        if (var30 == 1) {
            var46 += var11;
        }
        var var44 = var46;
        var46 += var23;
        var var17 = var46;
        var46 += var11 * 2;
        var var32 = var46;
        var46 += var12 * 6;
        var var34 = var46;
        var46 += var27;
        var var35 = var46;
        var46 += var20;
        var var10000 = var46 + var36;
        def.vertexCount = var10;
        def.faceCount = var11;
        def.textureTriangleCount = var12;
        def.vertexPositionsX = [];
        def.vertexPositionsY = [];
        def.vertexPositionsZ = [];
        def.faceVertexIndices1 = [];
        def.faceVertexIndices2 = [];
        def.faceVertexIndices3 = [];
        if (var12 > 0) {
            def.textureRenderTypes = [];
            def.textureTriangleVertexIndices1 = [];
            def.textureTriangleVertexIndices2 = [];
            def.textureTriangleVertexIndices3 = [];
        }
        if (var28 == 1) {
            def.vertexSkins = [];
        }
        if (var13 == 1) {
            def.faceRenderTypes = [];
            def.textureCoordinates = [];
            def.faceTextures = [];
        }
        if (var14 == 255) {
            def.faceRenderPriorities = [];
        }
        else {
            def.priority = var14;
            def.faceRenderPriorities = Array(def.faceCount).fill(def.priority);
        }
        if (var30 == 1) {
            def.faceAlphas = [];
        }
        if (var15 == 1) {
            def.faceSkins = [];
        }
        def.faceColors = [];
        var5.setPosition(var16);
        var39.setPosition(var34);
        var26.setPosition(var35);
        var9.setPosition(var46);
        var3.setPosition(var37);
        var var41 = 0;
        var var33 = 0;
        var var19 = 0;
        var var6;
        var var7;
        var var8;
        var var18;
        var var31;
        for (var18 = 0; var18 < var10; ++var18) {
            var8 = var5.readUint8();
            var31 = 0;
            if ((var8 & 1) != 0) {
                var31 = var39.readShortSmart();
            }
            var6 = 0;
            if ((var8 & 2) != 0) {
                var6 = var26.readShortSmart();
            }
            var7 = 0;
            if ((var8 & 4) != 0) {
                var7 = var9.readShortSmart();
            }
            def.vertexPositionsX[var18] = var41 + var31;
            def.vertexPositionsY[var18] = var33 + var6;
            def.vertexPositionsZ[var18] = var19 + var7;
            var41 = def.vertexPositionsX[var18];
            var33 = def.vertexPositionsY[var18];
            var19 = def.vertexPositionsZ[var18];
            if (var28 == 1) {
                def.vertexSkins[var18] = var3.readUint8();
            }
        }
        var5.setPosition(var17);
        var39.setPosition(var42);
        var26.setPosition(var25);
        var9.setPosition(var29);
        var3.setPosition(var4);
        for (var18 = 0; var18 < var11; ++var18) {
            def.faceColors[var18] = var5.readUint16();
            if (var13 == 1) {
                var8 = var39.readUint8();
                if ((var8 & 1) == 1) {
                    def.faceRenderTypes[var18] = 1;
                    var2 = true;
                }
                else {
                    def.faceRenderTypes[var18] = 0;
                }
                if ((var8 & 2) == 2) {
                    def.textureCoordinates[var18] = (var8 >> 2);
                    def.faceTextures[var18] = def.faceColors[var18];
                    def.faceColors[var18] = 127;
                    if (def.faceTextures[var18] != -1) {
                        var43 = true;
                    }
                }
                else {
                    def.textureCoordinates[var18] = -1;
                    def.faceTextures[var18] = -1;
                }
            }
            if (var14 == 255) {
                def.faceRenderPriorities[var18] = var26.readInt8();
            }
            if (var30 == 1) {
                def.faceAlphas[var18] = var9.readInt8();
            }
            if (var15 == 1) {
                def.faceSkins[var18] = var3.readUint8();
            }
        }
        var5.setPosition(var44);
        var39.setPosition(var24);
        var18 = 0;
        var8 = 0;
        var31 = 0;
        var6 = 0;
        var var21;
        var var22;
        for (var7 = 0; var7 < var11; ++var7) {
            var22 = var39.readUint8();
            if (var22 == 1) {
                var18 = var5.readShortSmart() + var6;
                var8 = var5.readShortSmart() + var18;
                var31 = var5.readShortSmart() + var8;
                var6 = var31;
                def.faceVertexIndices1[var7] = var18;
                def.faceVertexIndices2[var7] = var8;
                def.faceVertexIndices3[var7] = var31;
            }
            if (var22 == 2) {
                var8 = var31;
                var31 = var5.readShortSmart() + var6;
                var6 = var31;
                def.faceVertexIndices1[var7] = var18;
                def.faceVertexIndices2[var7] = var8;
                def.faceVertexIndices3[var7] = var31;
            }
            if (var22 == 3) {
                var18 = var31;
                var31 = var5.readShortSmart() + var6;
                var6 = var31;
                def.faceVertexIndices1[var7] = var18;
                def.faceVertexIndices2[var7] = var8;
                def.faceVertexIndices3[var7] = var31;
            }
            if (var22 == 4) {
                var21 = var18;
                var18 = var8;
                var8 = var21;
                var31 = var5.readShortSmart() + var6;
                var6 = var31;
                def.faceVertexIndices1[var7] = var18;
                def.faceVertexIndices2[var7] = var21;
                def.faceVertexIndices3[var7] = var31;
            }
        }
        var5.setPosition(var32);
        for (var7 = 0; var7 < var12; ++var7) {
            def.textureRenderTypes[var7] = 0;
            def.textureTriangleVertexIndices1[var7] = var5.readUint16();
            def.textureTriangleVertexIndices2[var7] = var5.readUint16();
            def.textureTriangleVertexIndices3[var7] = var5.readUint16();
        }
        if (def.textureCoordinates != null) {
            var var45 = false;
            for (var22 = 0; var22 < var11; ++var22) {
                var21 = def.textureCoordinates[var22] & 255;
                if (var21 != 255) {
                    if ((def.textureTriangleVertexIndices1[var21] & '\uffff') == def.faceVertexIndices1[var22] && (def.textureTriangleVertexIndices2[var21] & '\uffff') == def.faceVertexIndices2[var22] && (def.textureTriangleVertexIndices3[var21] & '\uffff') == def.faceVertexIndices3[var22]) {
                        def.textureCoordinates[var22] = -1;
                    }
                    else {
                        var45 = true;
                    }
                }
            }
            if (!var45) {
                def.textureCoordinates = null;
            }
        }
        if (!var43) {
            def.faceTextures = null;
        }
        if (!var2) {
            def.faceRenderTypes = null;
        }
    }
    computeAnimationTables(def) {
        var groupCounts = [];
        var numGroups = 0;
        var var3, var4, var10002;
        if (def.vertexSkins != null) {
            for (var3 = 0; var3 < def.vertexCount; ++var3) {
                var4 = def.vertexSkins[var3];
                ++groupCounts[var4];
                if (var4 > numGroups) {
                    numGroups = var4;
                }
            }
            def.vertexGroups = [];
            for (var3 = 0; var3 <= numGroups; ++var3) {
                def.vertexGroups[var3] = [];
                groupCounts[var3] = 0;
            }
            for (var3 = 0; var3 < def.vertexCount; def.vertexGroups[var4][groupCounts[var4]++] = var3++) {
                var4 = def.vertexSkins[var3];
            }
            def.vertexSkins = null;
        }
        if (def.faceSkins != null) { // L: 785
            groupCounts = []; // L: 786
            numGroups = 0; // L: 787
            for (var3 = 0; var3 < def.faceCount; ++var3) { // L: 788
                var4 = def.faceSkins[var3]; // L: 789
                var10002 = groupCounts[var4]++; // L: 790
                if (var4 > numGroups) { // L: 791
                    numGroups = var4;
                }
            }
            def.faceLabelsAlpha = []; // L: 793
            for (var3 = 0; var3 <= numGroups; ++var3) { // L: 794
                def.faceLabelsAlpha[var3] = []; // L: 795
                groupCounts[var3] = 0; // L: 796
            }
            for (var3 = 0; var3 < def.faceCount; def.faceLabelsAlpha[var4][groupCounts[var4]++] = var3++) { // L: 798 800
                var4 = def.faceSkins[var3]; // L: 799
            }
            def.faceSkins = null; // L: 802
        }
        // triangleSkinValues is here
    }
    computeTextureUVCoordinates(def) {
        def.faceTextureUCoordinates = [];
        def.faceTextureVCoordinates = [];
        for (var i = 0; i < def.faceCount; i++) {
            var textureCoordinate;
            if (def.textureCoordinates == undefined) {
                textureCoordinate = -1;
            }
            else {
                textureCoordinate = def.textureCoordinates[i];
            }
            var textureIdx;
            if (def.faceTextures == undefined) {
                textureIdx = -1;
            }
            else {
                textureIdx = def.faceTextures[i] & 0xFFFF;
            }
            if (textureIdx != -1) {
                var u = [];
                var v = [];
                if (textureCoordinate == -1) {
                    u[0] = 0.0;
                    v[0] = 1.0;
                    u[1] = 1.0;
                    v[1] = 1.0;
                    u[2] = 0.0;
                    v[2] = 0.0;
                }
                else {
                    textureCoordinate &= 0xFF;
                    var textureRenderType = 0;
                    if (def.textureRenderTypes != undefined) {
                        textureRenderType = def.textureRenderTypes[textureCoordinate];
                    }
                    if (textureRenderType == 0) {
                        var faceVertexIdx1 = def.faceVertexIndices1[i];
                        var faceVertexIdx2 = def.faceVertexIndices2[i];
                        var faceVertexIdx3 = def.faceVertexIndices3[i];
                        var triangleVertexIdx1 = def.textureTriangleVertexIndices1[textureCoordinate];
                        var triangleVertexIdx2 = def.textureTriangleVertexIndices2[textureCoordinate];
                        var triangleVertexIdx3 = def.textureTriangleVertexIndices3[textureCoordinate];
                        var triangleX = def.vertexPositionsX[triangleVertexIdx1];
                        var triangleY = def.vertexPositionsY[triangleVertexIdx1];
                        var triangleZ = def.vertexPositionsZ[triangleVertexIdx1];
                        var f_882_ = def.vertexPositionsX[triangleVertexIdx2] - triangleX;
                        var f_883_ = def.vertexPositionsY[triangleVertexIdx2] - triangleY;
                        var f_884_ = def.vertexPositionsZ[triangleVertexIdx2] - triangleZ;
                        var f_885_ = def.vertexPositionsX[triangleVertexIdx3] - triangleX;
                        var f_886_ = def.vertexPositionsY[triangleVertexIdx3] - triangleY;
                        var f_887_ = def.vertexPositionsZ[triangleVertexIdx3] - triangleZ;
                        var f_888_ = def.vertexPositionsX[faceVertexIdx1] - triangleX;
                        var f_889_ = def.vertexPositionsY[faceVertexIdx1] - triangleY;
                        var f_890_ = def.vertexPositionsZ[faceVertexIdx1] - triangleZ;
                        var f_891_ = def.vertexPositionsX[faceVertexIdx2] - triangleX;
                        var f_892_ = def.vertexPositionsY[faceVertexIdx2] - triangleY;
                        var f_893_ = def.vertexPositionsZ[faceVertexIdx2] - triangleZ;
                        var f_894_ = def.vertexPositionsX[faceVertexIdx3] - triangleX;
                        var f_895_ = def.vertexPositionsY[faceVertexIdx3] - triangleY;
                        var f_896_ = def.vertexPositionsZ[faceVertexIdx3] - triangleZ;
                        var f_897_ = f_883_ * f_887_ - f_884_ * f_886_;
                        var f_898_ = f_884_ * f_885_ - f_882_ * f_887_;
                        var f_899_ = f_882_ * f_886_ - f_883_ * f_885_;
                        var f_900_ = f_886_ * f_899_ - f_887_ * f_898_;
                        var f_901_ = f_887_ * f_897_ - f_885_ * f_899_;
                        var f_902_ = f_885_ * f_898_ - f_886_ * f_897_;
                        var f_903_ = 1.0 / (f_900_ * f_882_ + f_901_ * f_883_ + f_902_ * f_884_);
                        u[0] = (f_900_ * f_888_ + f_901_ * f_889_ + f_902_ * f_890_) * f_903_;
                        u[1] = (f_900_ * f_891_ + f_901_ * f_892_ + f_902_ * f_893_) * f_903_;
                        u[2] = (f_900_ * f_894_ + f_901_ * f_895_ + f_902_ * f_896_) * f_903_;
                        f_900_ = f_883_ * f_899_ - f_884_ * f_898_;
                        f_901_ = f_884_ * f_897_ - f_882_ * f_899_;
                        f_902_ = f_882_ * f_898_ - f_883_ * f_897_;
                        f_903_ = 1.0 / (f_900_ * f_885_ + f_901_ * f_886_ + f_902_ * f_887_);
                        v[0] = (f_900_ * f_888_ + f_901_ * f_889_ + f_902_ * f_890_) * f_903_;
                        v[1] = (f_900_ * f_891_ + f_901_ * f_892_ + f_902_ * f_893_) * f_903_;
                        v[2] = (f_900_ * f_894_ + f_901_ * f_895_ + f_902_ * f_896_) * f_903_;
                    }
                }
                def.faceTextureUCoordinates[i] = u;
                def.faceTextureVCoordinates[i] = v;
            }
        }
    }
    computeNormals(def) {
        if (def.vertexNormals != undefined) {
            return;
        }
        def.vertexNormals = [];
        var var1;
        for (var1 = 0; var1 < def.vertexCount; ++var1) {
            def.vertexNormals[var1] = { x: 0, y: 0, z: 0, magnitude: 0 };
        }
        for (var1 = 0; var1 < def.faceCount; ++var1) {
            var vertexA = def.faceVertexIndices1[var1];
            var vertexB = def.faceVertexIndices2[var1];
            var vertexC = def.faceVertexIndices3[var1];
            var xA = def.vertexPositionsX[vertexB] - def.vertexPositionsX[vertexA];
            var yA = def.vertexPositionsY[vertexB] - def.vertexPositionsY[vertexA];
            var zA = def.vertexPositionsZ[vertexB] - def.vertexPositionsZ[vertexA];
            var xB = def.vertexPositionsX[vertexC] - def.vertexPositionsX[vertexA];
            var yB = def.vertexPositionsY[vertexC] - def.vertexPositionsY[vertexA];
            var zB = def.vertexPositionsZ[vertexC] - def.vertexPositionsZ[vertexA];
            // Compute cross product
            var var11 = yA * zB - yB * zA;
            var var12 = zA * xB - zB * xA;
            var var13 = xA * yB - xB * yA;
            while (var11 > 8192 || var12 > 8192 || var13 > 8192 || var11 < -8192 || var12 < -8192 || var13 < -8192) {
                var11 >>= 1;
                var12 >>= 1;
                var13 >>= 1;
            }
            var length = parseInt(Math.sqrt(var11 * var11 + var12 * var12 + var13 * var13));
            if (length <= 0) {
                length = 1;
            }
            var11 = var11 * 256 / length;
            var12 = var12 * 256 / length;
            var13 = var13 * 256 / length;
            var var15;
            if (def.faceRenderTypes == undefined) {
                var15 = 0;
            }
            else {
                var15 = def.faceRenderTypes[var1];
            }
            if (var15 == 0) {
                var var16 = def.vertexNormals[vertexA];
                //console.log(var16);
                var16.magnitude = 0;
                var16.x += var11;
                var16.y += var12;
                var16.z += var13;
                ++var16.magnitude;
                var16 = def.vertexNormals[vertexB];
                var16.x += var11;
                var16.y += var12;
                var16.z += var13;
                ++var16.magnitude;
                var16 = def.vertexNormals[vertexC];
                var16.x += var11;
                var16.y += var12;
                var16.z += var13;
                ++var16.magnitude;
            }
            else if (var15 == 1) {
                if (def.faceNormals == undefined) {
                    def.faceNormals = [];
                }
                var var17 = def.faceNormals[var1] = {};
                var17.x = var11;
                var17.y = var12;
                var17.z = var13;
            }
        }
    }
    computeNormals2(def) {
        if (def.vertexNormals == null) {
            def.vertexNormals = [];
            let var1;
            for (var1 = 0; var1 < def.vertexCount; ++var1) {
                def.vertexNormals[var1] = { x: 0, y: 0, z: 0, magnitude: 0 };
            }
            for (var1 = 0; var1 < def.faceCount; ++var1) {
                let var2 = def.faceVertexIndices1[var1];
                let var3 = def.faceVertexIndices2[var1];
                let var4 = def.faceVertexIndices3[var1];
                let var5 = def.vertexPositionsX[var3] - def.vertexPositionsX[var2];
                let var6 = def.vertexPositionsY[var3] - def.vertexPositionsY[var2];
                let var7 = def.vertexPositionsZ[var3] - def.vertexPositionsZ[var2];
                let var8 = def.vertexPositionsX[var4] - def.vertexPositionsX[var2];
                let var9 = def.vertexPositionsY[var4] - def.vertexPositionsY[var2];
                let var10 = def.vertexPositionsZ[var4] - def.vertexPositionsZ[var2];
                let var11 = var6 * var10 - var9 * var7;
                let var12 = var7 * var8 - var10 * var5;
                let var13;
                for (var13 = var5 * var9 - var8 * var6; var11 > 8192 || var12 > 8192 || var13 > 8192 || var11 < -8192 || var12 < -8192 || var13 < -8192; var13 >>= 1) {
                    var11 >>= 1;
                    var12 >>= 1;
                }
                let var14 = parseInt(Math.sqrt(var11 * var11 + var12 * var12 + var13 * var13));
                if (var14 <= 0) {
                    var14 = 1;
                }
                var11 = var11 * 256 / var14;
                var12 = var12 * 256 / var14;
                var13 = var13 * 256 / var14;
                let var15;
                if (def.faceRenderTypes == null) {
                    var15 = 0;
                }
                else {
                    var15 = def.faceRenderTypes[var1];
                }
                if (var15 == 0) {
                    let var16 = def.vertexNormals[var2];
                    var16.x += var11;
                    var16.y += var12;
                    var16.z += var13;
                    ++var16.magnitude;
                    var16 = def.vertexNormals[var3];
                    var16.x += var11;
                    var16.y += var12;
                    var16.z += var13;
                    ++var16.magnitude;
                    var16 = def.vertexNormals[var4];
                    var16.x += var11;
                    var16.y += var12;
                    var16.z += var13;
                    ++var16.magnitude;
                }
                else if (var15 == 1) {
                    if (def.faceNormals == null) {
                        def.faceNormals = [];
                    }
                    let var17 = def.faceNormals[var1] = {};
                    var17.x = var11;
                    var17.y = var12;
                    var17.z = var13;
                }
            }
        }
    }
}