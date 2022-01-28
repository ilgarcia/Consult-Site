class HelloController {
    async index(req,res) {
        return res.json({hello: "world sdadasdasd"})
    }
}

export default new HelloController();