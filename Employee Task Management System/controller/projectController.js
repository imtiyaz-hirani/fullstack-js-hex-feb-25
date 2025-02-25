const Project = require("../model/project");

exports.addProject=async (req,res)=>{

    let {title,shortDescription,estimatedEndDate,clientName,techStack} = req.body;
    
    let project = new Project({title,shortDescription,estimatedEndDate,clientName,techStack})
    project = await project.save();
    res.json(project);
}

exports.getAllProject = async (req,res)=>{
    const projects = await Project.find();
    res.json(projects);
}