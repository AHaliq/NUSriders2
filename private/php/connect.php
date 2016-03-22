<?php
if(!defined('INCLUDE_CHECK'))
  die('Access violation');

pg_connect("host=localhost port=5432 dbname=nusriders user=postgres password=password")
		or die('Could not connect: ' . pg_last_error());
?>
