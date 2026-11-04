ServerEvents.recipes(event =>{
    const recipe_id = [
        "extendedae_plus:assembler_matrix_crafter_plus",
        "extendedae_plus:assembler_matrix_pattern_plus",
        "extendedae_plus:assembler_matrix_upload_core",
        "extendedae_plus:assembler_matrix_speed_plus"
    ]

    recipe_id.forEach(id =>{
        event.replaceInput({id},
            'extendedae:assembler_matrix_wall',
            'extendedae_plus:super_assembler_matrix_wall'
        )
    })
})