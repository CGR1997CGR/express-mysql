var user = {
	insert:'insert into user(id, username) values(0,?);',
	update:'update user set name=? where id=?;',
	delete: 'delete from user where id=?;',
	queryById: 'select * from user where id=?;',
	queryAll: 'select * from user;'
};
 
module.exports = user;