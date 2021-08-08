create table users(
    user_id bigserial not null primary key,
    user_name varchar(32) not null,
    user_age int not null,
    referal_id int not null references referal(referal_id)
);
create table referal(
    referal_id  bigserial not null primary key,
    referal_name varchar(64) not null
);