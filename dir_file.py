import os

# 目录下面再创建 python目录，在Python目录下面再创建fileop目录
# exist_ok=True 指定了，如果某个要创建的目录已经存在，也不报错
# os.makedirs("./python/fileop", exist_ok=True)

# os.remove 可以删除一个文件
# os.remove("./python/ww.py")

# shutil.rmtree() 可以递归的删除某个目录所有的子目录和子文件
# 注意：参数 ignore_errors=True 保证如果目录不为空，不会抛出异常。
import shutil

# shutil.rmtree("./python", ignore_errors=True)

# 拷贝文件，可以使用shutil模块的copyfile函数。
# 注意，如果拷贝前，e:/first.py 已经存在，则会被拷贝覆盖，所以使用该函数一定要小心。
# from shutil import copyfile
# copyfile("./python/fileop/www.py", "./www.py")

# 拷贝目录，可以使用 shutil的copytree函数。
# 注意拷贝前， 目标目录必须 不存在 ，否则会报错。
# 上面的代码执行前面，如果 e:/new/bbb 已经存在，执行到copytree时，就会报错
# 上面的代码执行前面，如果 e:/new 这个目录都不存在，执行到copytree时，就会 创建 e:/new 目录，再创建 e:/new/bbb 目录，再拷贝 d:/tools/aaa 目录中所有的内容 到 e:/new/bbb 中。
# 上面的代码执行前面，如果 e:/new 这个目录存在，但是 e:/new/bbb 不存在，执行到copytree时，就只会 创建 e:/new/bbb ，再拷贝 d:/tools/aaa 目录中所有的内容 到 e:/new/bbb 中。
# from shutil import copytree
#
# copytree("python/fileop", "./fileop")

# 要修改文件名、目录名，可以使用os模块的rename函数。
# 注意，Linux 系统上，如果重命名之前 d:/tools/second.py 已经存在，则会被覆盖，所以使用该函数一定要小心。
# os.rename("./python/fileop/www.py", "./python/fileop/eee.py")

# 对于文件名的操作，比如 获取文件名称，文件所在目录，文件路径的拼接等，都可以使用 os.path 模块。
import time

now = time.time()
print(time.ctime(now))

# 获取某个目录中所有的 文件， 包括子目录里面的文件。 可以使用 os库中的walk方法
# dir = "python"
# files = []
# dirs = []
# for (dirpath, dirnames, filenames) in os.walk(dir):
#     files += filenames
#     dirs += dirnames
# print(files)
# print(dirs)

# 如果要得到某个目录下所有文件的全路径可以这样
dir = "python"
for (dirpath, dirnames, filenames) in os.walk(dir):
    for fn in filenames:
        fpath = os.path.join(dirpath, fn)
        print(fpath)
