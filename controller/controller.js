import { pool } from "../config/db.js";

const getUsuarios = async (req, res) => {
    const consulta = "SELECT * FROM usuarios";
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createUsuarios = async (req, res) => {
    const {nombre, balance } = req.body;
    const consulta = `INSERT INTO usuarios (nombre, balance) VALUES ('${nombre}', ${balance})`;
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateUsuarios = async (req, res) => {
    const { nombre, balance } = req.body;
    const { id } = req.params;
    const consulta = `UPDATE usuarios SET nombre = '${nombre}', balance = ${balance} WHERE id = ${id}`;
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }    
}

const deleteUsuarios = async (req, res) => {
    const { id } = req.params;
    const consulta = `DELETE FROM usuarios WHERE id = ${id}`;
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getTransferencias = async (req, res) => {
    const consulta = `
        SELECT t.fecha, emisor.nombre AS emisor, receptor.nombre AS receptor, t.monto
        FROM transferencias t
        INNER JOIN usuarios emisor ON t.emisor = emisor.id
        INNER JOIN usuarios receptor ON t.receptor = receptor.id;`;
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const createTransferencias = async (req, res) => {
    const { emisor, receptor, monto } = req.body;
    const consulta = `INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES (${emisor}, ${receptor}, ${monto}, now())`;
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export { 
    getUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios,
    getTransferencias,
    createTransferencias
}