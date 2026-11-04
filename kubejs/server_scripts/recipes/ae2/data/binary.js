ServerEvents.recipes(event =>{
    // 数据残存晶体 → 二进制 100（数据重组器）
    event.custom({
        "type": "data_energistics:data_reassembler",
        "inputs": {
            "items": [
                { "item": "data_energistics:data_residual_crystal", "count": 1 }
            ]
        },
        "outputs": {
            "resource": {
                "key_type": "data_energistics:manifest_binary",
                "amount": 100
            }
        }
    })
})
