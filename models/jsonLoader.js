
const json = require('../json/sample.json')
const _ = require('lodash')
var xl = require('excel4node')
module.exports = class jsonLoader {
    constructor(){}

     load() {
        console.log(`Load method activated!`)
        let jsonKeys = _.keys(json)
        let wb = new xl.Workbook()
        let ws = wb.addWorksheet('Sheet 1')
        let style = this.loadStyle(wb)
        for (let index = 0; index <= jsonKeys.length; index++) {
            console.log(jsonKeys[index])
            ws.cell(1, index + 1).string(jsonKeys[index])
        }
        
        wb.write('Excel.xlsx');
    }

    loadStyle(wb) {
        return wb.createStyle({
            font: {
                color: '#FF0800',
                size: 12,
            },
            numberFormat: '$#,##0.00; ($#,##0.00); -',
        });
    }


}