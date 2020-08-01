
const json = require('../json/sample.json')
const _ = require('lodash')
var xl = require('excel4node')
module.exports = class jsonLoader {
    constructor(){}

     load() {
        console.log(`Load method activated!`)
        let jsonKeys = _.keys(json)
        let wb = new xl.Workbook()
        // let wb = xl.Workbook()
        let ws = wb.addWorksheet('Sheet 1')
        let style = this.loadStyle(wb)
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
// module.exports =  jsonLoader 