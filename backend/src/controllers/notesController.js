export function getAllNotes(req,res) {
    res.status(200).send("You fetched the notes");
}

export function createNotes(req,res) {
    res.status(201).json({message:"Notes created successfully!"});
}

export function updateNotes(req,res) {
    res.status(200).json({message:"Notes updated successfully!"});
}

export function deleteNotes(req,res) {
    res.status(200).json({message:"Notes deleted successfully!"});
}