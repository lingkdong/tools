package com.tools.utils;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.util.*;

/**
 * Created by lk on 2018/2/28.
 */
public class ImgUtil {
    private final static java.util.List<String> Transparent_TYPE = Arrays.asList(
            Constant.PNG,
            Constant.GIF
    );
    public static File doCompress(String oldFile, int width, int height, String smallFlag, boolean
            equalRatio) {
        if (oldFile != null && width > 0 && height > 0) {
            String type=FileUtil.getNameSuffix(oldFile).toLowerCase();
            if(Transparent_TYPE.contains(type)){
                return doCompress_Gif_Png(oldFile,width,height,smallFlag,equalRatio);
            }
            Image srcFile = null;
            try {
                File file = new File(oldFile);
                // 文件不存在
                if (!file.exists()) {
                    return null;
                }
                /*读取图片信息*/
                srcFile = ImageIO.read(file);
                int new_w = width;
                int new_h = height;
                if (equalRatio) {
//					// 为等比缩放计算输出的图片宽度及高度
                    double rate1 = ((double) srcFile.getWidth(null)) / (double) width + 0.1;
                    double rate2 = ((double) srcFile.getHeight(null)) / (double) height + 0.1;
                    double rate = rate1 > rate2 ? rate1 : rate2;
                    new_w = (int) (((double) srcFile.getWidth(null)) / rate);
                    new_h = (int) (((double) srcFile.getHeight(null)) / rate);
                }
				/* 宽高设定*/
                BufferedImage tag = new BufferedImage(new_w, new_h, BufferedImage.TYPE_INT_RGB);
                tag.getGraphics().drawImage(srcFile.getScaledInstance(new_w, new_h, Image.SCALE_SMOOTH), 0, 0, null);
				/*压缩后的文件名 */
                int index = oldFile.lastIndexOf(".");
                File newImage = new File(oldFile.substring(0, index) + smallFlag + oldFile.substring(index));
				/*压缩之后临时存放位置*/
                ImageIO.write(tag, oldFile.substring(index + 1), new FileOutputStream(newImage));
                return newImage;
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                srcFile.flush();
            }
        }
        return null;
    }

    /**
     * png 和 gif 会包含 透明底色
     *
     * @param oldFile    将要压缩的图片
     * @param width      压缩宽
     * @param height     压缩高
     * @param equalRatio 是否等比压缩 若true宽高比率将将自动调整
     *
     */
    private static File doCompress_Gif_Png(String oldFile, int width, int height, String smallFlag, boolean
            equalRatio) {
        if (oldFile != null && width > 0 && height > 0) {
            Image srcFile = null;
            try {
                File file = new File(oldFile);
                // 文件不存在
                if (!file.exists()) {
                    return null;
                }
				/*读取图片信息*/
                srcFile = ImageIO.read(file);
                int new_w = width;
                int new_h = height;
                if (equalRatio) {
//					// 为等比缩放计算输出的图片宽度及高度
                    double rate1 = ((double) srcFile.getWidth(null)) / (double) width + 0.1;
                    double rate2 = ((double) srcFile.getHeight(null)) / (double) height + 0.1;
                    double rate = rate1 > rate2 ? rate1 : rate2;
                    new_w = (int) (((double) srcFile.getWidth(null)) / rate);
                    new_h = (int) (((double) srcFile.getHeight(null)) / rate);
                }
				/* 宽高设定*/
                BufferedImage to = new BufferedImage(new_w, new_h, BufferedImage.TYPE_INT_RGB);
                Graphics2D g2d = to.createGraphics();
                to = g2d.getDeviceConfiguration().createCompatibleImage(new_w, new_h, Transparency.TRANSLUCENT);
                g2d.dispose();
                g2d = to.createGraphics();
                g2d.drawImage(srcFile.getScaledInstance(new_w, new_h, Image.SCALE_SMOOTH), 0, 0, null);
                g2d.dispose();

				/*压缩后的文件名 */
                int index = oldFile.lastIndexOf(".");
                File newImage = new File(oldFile.substring(0, index) + smallFlag + oldFile.substring(index));
				/*压缩之后临时存放位置*/
                ImageIO.write(to, oldFile.substring(index + 1), new FileOutputStream(newImage));
                return newImage;
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                srcFile.flush();
            }
        }
        return null;
    }

}



