const Encriptor = require('../model/encriptor');

const EncriptorController = {
    async encriptarPassword(req, res) {
        try {
            const { password } = req.body;
            
            if (!password) {
                return res.status(400).json({ status: 400, message: "Password is required!" });
            }

            const encriptorInstance = new Encriptor();
            const encryptedPassword = await encriptorInstance.encriptar(password);
            return res.status(200).json({ status: 200, encryptedPassword });
        } catch (error) {
            console.error('Error en encriptarPassword:', error);
            return res.status(500).json({ status: 500, message: "Internal server error" });
        }
    },

    async desencriptarPassword(req, res) {
        try {
            const { encryptedPassword } = req.body;
            
            if (!encryptedPassword) {
                return res.status(400).json({ status: 400, message: "Encrypted password is required!" });
            }

            const encriptorInstance = new Encriptor();
            const decryptedPassword = await encriptorInstance.desencriptar(encryptedPassword);
            return res.status(200).json({ status: 200, decryptedPassword });
        } catch (error) {
            console.error('Error en desencriptarPassword:', error);
            return res.status(500).json({ status: 500, message: "Internal server error" });
        }
    }
};

module.exports = EncriptorController;