import mongoose from 'mongoose'

const pageSchema = mongoose.Schema({
	pageName: {type: String, unique: true, required: true},
	sections: [
		{
			marker: {type: String},
			sectionName: {type: String},
			text: [{type: String}] 
		}
	]
})

const pageModel = mongoose.model('page', pageSchema)

export default pageModel