---
title: .VM properties and Memory in JVM
description: JVM under the hood part2 - VMproperties and introduction to Memory
date: 2020-03-28
template: blog
thumbnail: ./coffe_java.jpg
image: ./coffe_java.jpg
banner: ./coffe_java.jpg
---

**This is my series of articles about Java Virtual Machine!**

The core of the JVM is what you need to understand, from a simple configuration, to memory management within the JVM.

## Understanding the Virtual Machine in your IDE

Configuring the VM in your development IDE is essential for your code to run in a way that does not impact anything, we will see later on how everything around the JVM makes everything as responsive as possible. So let's start from somewhere, and then dive deeper into memory.

> Tip: It is interesting and extremely important that the JVM be configured according to your IDE, you can obtain this configuration in several ways, but in this tutorial I will teach the configuration being done in IntelliJ on Windows 10

#### Configuring IntelliJ

In it, the easiest way to change the JVM options is in:

Help> Edit VM custom options

![IntelliJ screen with help tab selected](https://dev-to-uploads.s3.amazonaws.com/i/btkkd5sw4unam86h7dbb.png)

This action will result in a copy of the .vmproperties file, after doing this in the configuration directory of your IDE, you will have a document in the editor that can be changed according to the following image:

![file generated after clicking](https://dev-to-uploads.s3.amazonaws.com/i/pxlnr4rajvwl3uwuvw67.png)

If you can't do it through your IDE, it's okay, opening your terminal (cmd or linux terminal), you can edit this file manually with the following command:

```
SUA_IDE \ bin \ <product> [bits] [. Exe] .vmoptions
```

In the example below, this file will be executed in the Windows 10 terminal, I located the folder where my IDE (IntelliJ) was, and from there I ran my **. Vmproperties** and then ran VM options, the path may vary according to of the folder that is saving your IDE and where your code is being edited.

Once executed, it is redirected to the preferred editor

```
idea64.exe.vmoptions
```

![cmd with idea.exe.vmoptions running](https://dev-to-uploads.s3.amazonaws.com/i/lo3zjp16flvykalf4hls.png)

In the image we have the editor's options:

![file generated from it](https://dev-to-uploads.s3.amazonaws.com/i/0a7d9tjc48c5qppa1qrj.png)

The options are defined line by line, and you can configure it in the way that is most suitable for your system, the default configuration you can acquire is as follows, the same available on the [JebBrains website](https://intellij-support.jetbrains.com/hc/en-us/articles/206544869-Configuring-JVM-options-and-platform-properties) with minor changes to suit my system.

```
-server
-Xms128m
-Xmx512m
-XX: ReservedCodeCacheSize = 240m
-XX: + UseConcMarkSweepGC
-XX: SoftRefLRUPolicyMSPerMB = 50
-and the
-Dsun.io.useCanonCaches = false
-Djava.net.preferIPv4Stack = true
-XX: + HeapDumpOnOutOfMemoryError
-XX: -OmitStackTraceInFastThrow
-XX: MaxJavaStackTraceDepth = -1
```

## The most common options

| Option        | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -Xmx          | Limits the size of the heap that the JVM can allocate and run on IntelliJ. The default value depends on the platform, if you are experiencing slowness you may want to increase this value, for example, set it to 2048 megabytes, which will be **- Xmx2048m**.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -Xms          | Specifies the initial memory allocated by the JVM to run IntelliJ. The default value depends on the platform you are using, it is usually set to about half the maximum allowed memory (-Xmx), for example, **- Xms1024m**.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -XX: NewRatio | Specifies the ratio between the size of Young Generation and Old Generation. In most cases, a ratio between 2 and 4 is recommended. This will set the size of the young generation to be 1/2 to 1/4 of the corresponding old generation, which is even good when you are often working on a project and in just one file at a time. However, if you are constantly opening new files, and switching between multiple projects, you may need to increase the young generation. In this case, try the setting **- XX: NewRaio = 1**, which will make the young generation as big as the Old generation, allowing your created objects to remain in the young generation for longer |

#### You must be wondering what are these Old Generation, Young Generation and the like, right?

![Elderly woman with a doubtful face](https://dev-to-uploads.s3.amazonaws.com/i/g2y4wq7xgg62xostxs9t.jpg)

#### Now we have reached another level, where we will address memory management, in this article we will have only one meaning of what each is:

We will see more in depth in the next articles.

## Introduction to JVM memory

Basically the JVM is divided into two parts: Memory Heap and Non-heap (which you can also find by Non-heap), Spaces seen as Heap and Non-Heap, and in some books or external sources you can find Stack as well which are memory addresses. see in the architecture below:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/onka7z4hhgok65m59bv5.png)

the meaning of each is:

-> **Heap**: it is like a dynamic allocation area, where your space is reserved to store the variables and data that are created during the execution of the program.

Basically, the Heap is structured and divided into generations to better organize the objects that are delivered.

-> **Young Generation** is the minimum lifetime of an object, before the garbage collector passes through this generation everyone is allocated there, and within the young generation we have the following spaces:

-> **Eden**: as the name says: Eden, that is, beginning, in this space new objects, newly created are allocated. For each object created, for example, Pessoa ana = new Pessoa (); it would be allocated in this memory space.

This area tends to retain objects for a short time, since within each program execution many of these objects are created, so the objects spend a short life cycle in Eden.

-> **Survivor Spaces**: after Eden is fully occupied and without the possibility of having any new objects in it, they pass to Survivor Spaces, where the JVM executes a Garbage Collection (we'll see more about it later) which removes objects that are unreferenced and unused in order to free up more memory. When objects are created correctly and with reference, they pass from Eden and survive the Garbage Collector, being moved to the survival area, but with the hope of moving on to the next.

-> **Old Generation**: basically when there is no more space in the memory the objects are allocated in the Old Generation.

-> **Permanent Generation**: after all this life cycle, you reach permanent generation, it is the area defined by the JVM to store the class definitions

_Remember that all this memory management is based on Java 8_

And stop here, follow this series about Java Virtual Machine, in the next article we will have GARBAGE COLLECTIONS

![thank you next, gif of ariana grande's video clip](https://media.giphy.com/media/MT9MOLJXrXfVvMJ34C/giphy.gif)

References:
[JetBrains website](https://www.jetbrains.com/help/idea/tuning-the-ide.html)
