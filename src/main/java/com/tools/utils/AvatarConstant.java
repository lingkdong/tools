package com.tools.utils;

import com.tools.constants.FileChannelEnum;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;

import java.io.File;
import java.util.Arrays;
import java.util.List;

/**
 * @Author: dongxin
 * @Description:
 * @Date: 2018/5/31 17:38
 **/
public class AvatarConstant {
    public final static List<String> AVATAR_TYPE = Arrays.asList(Constant.JPG,
            Constant.JPEG,
            Constant.PNG,
            Constant.GIF
    );
    public static int small = 48;
    public static int large = 200;
    public static String small_flag = "_small";
    public static String large_flag = "_large";

    /**
     * users/id/nameHex/img/avatar
     * @param userId
     * @param username
     * @return
     */
    public static String getAvatarDir(Long userId,String username) {
        return FileChannelEnum.USERS.value()
                + File.separator
                + userId
                + File.separator
                +DigestUtils.md2Hex(username).substring(0,8)
                + File.separator
                + Constant.IMG
                + File.separator
                + Constant.AVATAR;
    }

    public static String getLargeAvatar(String avatarPath){
        if (StringUtils.isNotBlank(avatarPath)) {
            return avatarPath.replace(small_flag, large_flag);
        }
        return null;
    }
}
