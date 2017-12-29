package com.tools.worker;

import com.tools.dto.format.Format;

/**
 * Created by DT254 on 2017/11/7.
 */
public abstract class FormatWorker {
    abstract Format pretty();

    abstract Format compress();
}
