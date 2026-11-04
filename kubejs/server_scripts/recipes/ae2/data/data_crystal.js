ServerEvents.recipes(event =>{
    event.remove({id:'data_energistics:data_energistics/ae2/transform/data_crystal'})

    event.custom({
	    "type": "ae2:transform",
	    "ingredients": [
	    	{
	    		"tag": "c:dusts/data_dust"
	    	},
	    	{
	    		"item": "advanced_ae:quantum_alloy"
	    	}
	    ],
	    "result": {
	    	"count": 16,
	    	"id": "data_energistics:data_crystal"
	    }
    })
})