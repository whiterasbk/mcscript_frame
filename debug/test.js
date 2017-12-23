var main_path = "/storage/sdcard0/github Projects/rhinoLibrary/main.js";
var main_stream = new java.io.FileInputStream(new java.io.File(main_path));
var main_buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, main_stream.available());
main_stream.read(main_buffer);
var main_code = new java.lang.String(main_buffer) + "";
print("load successfully");
eval(main_code);
print("run successfully");

