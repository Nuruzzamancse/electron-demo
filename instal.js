// NB: Use this syntax within an async function, Node does not have support for
//     top-level await as of Node 12.
const electronInstaller = require('electron-winstaller');


async function runIt(){
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: '/release-builds/shoppinglist-win32-ia32',
          outputDirectory: '/win',
          authors: 'My App Inc.',
          exe: 'shop.exe'
        });
        console.log('It worked!');
      } catch (e) {
        console.log(`No dice: ${e.message}`);
      }
}

runIt();