var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim()
}
/* 通过cmd 去空格,并且转换成字符串 */
var versionRequirements = [{
    name: 'node',
    currentVersion: semver.clean(process.version),
    /* currentVersion 当前版本 */
    versionRequirement: packageConfig.engines.node
}]

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        currentVersion: exec('npm --version'),
        versionRequirement: packageConfig.engines.npm /* 读取npm */
    })
}

module.exports = function() {
    var warnings = []
    for (var i = 0; i < versionRequirements.length; i++) {
        var mod = versionRequirements[i]
        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(mod.name + ': ' +
                chalk.red(mod.currentVersion) + ' should be ' +
                chalk.green(mod.versionRequirement)
            )
        }
    }

    if (warnings.length) {
        console.log('')
        console.log(chalk.yellow('To use this template, you must update following to modules:'))
        console.log()
        for (var i = 0; i < warnings.length; i++) {
            var warning = warnings[i]
            console.log('  ' + warning)
        }
        console.log()
        process.exit(1)
    }
}