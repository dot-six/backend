import mysql from 'mysql'
import type { Connection } from 'mysql'

let conn: Connection;

export async function connect() {
	conn = mysql.createConnection({
		host: '',
		user: '',
		password: '',
		database: ''
	});

	return new Promise((resolve, reject) => {
		conn.connect(function (err) {
			if (err) return reject(err);
			resolve();
		});
	});
};

export async function query(sql: string, format?: string[]) {
	if (!conn) throw new Error("MySQL connection not initialized yet.");

	return new Promise((resolve, reject) => {
		let callback = (err, results, fields) => {
			if (err) return reject(err);
			resolve(results, fields);
		};

		if (format) {
			conn.query(sql, format, callback);
		} else {
			conn.query(sql, callback);
		}
	});
};
