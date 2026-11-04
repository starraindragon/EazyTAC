# 简单工程 EazyTAC

> 以应用能源 2 与通用机械为核心的科技整合包，围绕自动化生产线展开，加入龙之进化、无尽贪婪与一条超长的毕业任务线。

[![Minecraft](https://img.shields.io/badge/Minecraft-1.21.1-3fb950?style=flat-square)](https://www.minecraft.net/)
[![NeoForge](https://img.shields.io/badge/NeoForge-21.1.248-d29922?style=flat-square)](https://neoforged.net/)
[![Version](https://img.shields.io/badge/Version-1.2-38d39f?style=flat-square)]()
[![Java](https://img.shields.io/badge/Java-21+-2f81f7?style=flat-square)]()

---

## 简介

《简单工程 EazyTAC》是一个 NeoForge 1.21.1 的科技整合包。核心玩法是围绕 **应用能源 2（AE2）** 与 **通用机械（Mekanism）** 搭建自动化生产线，配合龙之进化、无尽贪婪、神秘农业等模组，最终走向造化垂青之杖的毕业线。

整合包自带 7 个任务章节，从开局引导一直铺到毕业内容，适合喜欢长线养成和自动化设计的玩家。

## 特性

- **自研多方块机器**：ADES 控制器、UCAC、万用压缩等，全部基于 Multiblocked2 实现
- **定制的传送优化模组**：`tp_optimize`，传送前先异步准备目标区块，避免客机传送卡住主机
- **性能向调校**：已集成 Lithium、Saturn、MoreCulling、Particle Core 等优化模组
- **配方重构**：无尽催化剂、无用之物锭线、造化垂青之杖等均已重做

## 环境要求

| 项目 | 要求 |
|---|---|
| Minecraft | 1.21.1 |
| 加载器 | NeoForge 21.1.248 |
| Java | **21**（不要用 22/23，官方只保证 21） |
| 内存 | 建议分配 **10G**；物理内存不足 16G 时请降到 8G |
| 磁盘 | 解压后约 1.2 GB |

## 安装

1. 下载最新版本的压缩包（`简单工程EazyTAC1.2.zip`）；
2. 用 HMCL / PCL 等启动器导入该压缩包；
3. 选择实例，设置 Java 21 与内存（建议 10G）；
4. 启动游戏。

> ⚠️ **路径不要包含中文以外的特殊字符**，部分模组的资源路径对大小写和字符敏感。

## JVM 参数（可选）

建议内存 10G 时使用。**必须单行粘贴**，每个参数之间有空格：

```
-Xms10G -Xmx10G -XX:+UseG1GC -XX:MaxGCPauseMillis=60 -XX:+ParallelRefProcEnabled -XX:G1NewSizePercent=25 -XX:G1MaxNewSizePercent=40 -XX:G1ReservePercent=15 -XX:InitiatingHeapOccupancyPercent=25 -XX:G1MixedGCLiveThresholdPercent=85 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -XX:+DisableExplicitGC
```

**如果你的机器无法分配 10G 内存，请直接删掉这些参数**，改用启动器的内存滑块设置。

> 注意：`-XX:G1NewSizePercent` 等属于实验性参数，需要 `-XX:+UnlockExperimentalVMOptions` 才能使用；
> 若启动报 `Unrecognized VM option` 或 `experimental and must be enabled`，请改用简化版：
> ```
> -Xms8G -Xmx8G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=60
> ```

## 版本记录

| 版本 | 上传时间 | 状态 | 说明 |
|---|---|---|---|
| **1.2** | 2026/11/01 14:32 | 最新 | 传送优化模组、移除万象合金炉、并发压印模板掉落、连锁替换 |
| 1.1 | 2026/10/31 12:10 | 可下载 | 大量优化模组、JVM 参数、富集碳配方修复 |
| 1.0 | 2026/10/25 00:53 | **已下架** | 首个内测版本，不再提供下载 |

完整的更新日志见 [eazytac-log.astaxqxkdxy.org](https://eazytac-log.astaxqxkdxy.org)。

## 常见问题

<details>
<summary><b>启动报 <code>Unrecognized VM option</code> / 无法创建虚拟机</b></summary>

JVM 参数粘贴时换行被吞掉，多个参数黏在一起了。把参数改成**单行、空格分隔**即可，或直接清空参数用启动器的内存滑块。
</details>

<details>
<summary><b>启动卡住约 5 分钟</b></summary>

「自动汉化更新」模组启动时会检查并下载语言包，网络不通会等待超时。可以在 `mods` 里停用 `I18nUpdateMod`，汉化资源包已内置在 `resourcepacks/` 中，不影响使用。
</details>

<details>
<summary><b>联机时客机传送导致主机卡顿</b></summary>

1.2 起已内置 `tp_optimize`，会把区块加载从传送瞬间拆到多个 tick。若仍有卡顿，检查：
- 主机模拟距离是否过高（建议 6~8）；
- FTB Chunks 强制加载区块数量；
- 是否同时开着浏览器等占用内存的程序（内存不足会触发交换区换页，表现为几秒级冻结）。
</details>

<details>
<summary><b>找不到某个机器 / 配方</b></summary>

本整合包对部分模组做了移除与重构，例如万象合金炉已整体禁用，无用之物锭线改为炼狱/终焉工作台配方。请以任务书与 JEI 实际显示为准。
</details>


## 许可证

本仓库中的内容**分层授权**：

| 内容 | 许可证 | 文件 |
|---|---|---|
| 代码：KubeJS 脚本、Java 源码、构建脚本 | **MIT** | [LICENSE](LICENSE) |
| 创作：任务文本、自制贴图、配置与整合方案 | **CC BY-NC-SA 4.0** | [LICENSE-CC](LICENSE-CC) |
| 第三方模组与贴图 | 各自原始许可证 | [NOTICE](NOTICE) |

简单说：

- ✅ 可以自由使用、修改、二次分发本仓库的代码与内容（需保留署名）；
- ✅ 修改后的作品需以相同许可（CC BY-NC-SA 4.0）发布；
- ❌ 不能将本整合包或其衍生品用于**商业目的**（售卖、付费服务器等）；
- ❌ 本许可证**不覆盖**第三方模组，它们各自归属原作者。

## 致谢

本整合包使用了大量社区模组的公开资源，包括但不限于：

- **Multiblocked2** / LowDragLib2 —— 自研多方块机器的运行基础
- **ModularMachinery**（HellFirePvP）—— 多方块组件贴图引用（GPL-3.0）
- **AE2 Crystal Science**（ExtremelyFrozen / MHanHanBing）—— 电路蚀刻器贴图引用（CC BY-NC-SA 3.0）
- 以及所有通过 Modrinth / CurseForge 分发的模组作者

完整的第三方归属与授权说明见 [NOTICE](NOTICE)。

## 反馈

- 更新日志：[changelog/index.html](changelog/index.html)
- 维护者：**想去星空的星雨**

---

<sub>本项目中的配方、任务与自研模组内容版权归维护者所有；所引用的第三方模组资源遵循各自许可证。</sub>
