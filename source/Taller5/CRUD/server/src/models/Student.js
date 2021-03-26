const { Schema, model} = require('mongoose')

const studentSchema = new Schema({
        carnet:{ 
            type:Number, 
            required:true
        },
        name:{ 
            type:String, 
            required:true
        },
        state:{ 
            type:String, 
            required:true
        }
    },{
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('Students', studentSchema);