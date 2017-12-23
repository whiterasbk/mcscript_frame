var main_path = "/storage/emulated/0/JavaScriptProjects/Library/package/script/lunch.js";
var main_stream = new java.io.FileInputStream(new java.io.File(main_path));
var main_buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, main_stream.available());
main_stream.read(main_buffer);
var main_code = new java.lang.String(main_buffer) + "";
print("load successfully");
var real_runCode = main_code.replace("package_test_debug = !true", "package_test_debug = true");
eval(real_runCode);
print("run successfully");

