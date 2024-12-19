$(document).ready(function () {
  wrapImageWithFancyBox();
});

/**
 * Wrap images with fancybox support.
 */
function wrapImageWithFancyBox() {
  $(".post-detail")
    .find("img")
    .not(".swiper-slide img")
    .not(".sidebar-image img")
    .not("#author-avatar img")
    .not(".post-donate img")
    .not(".post-donate img")
    .not(".friend-avatar img")
    .not("[title=notice]")
    .not("#myComment img")
    .not(".social-share .qrcode img")
    .not(".ghcard img")
    .not("img.inline")
    .not(".site-card img")
    .not(".link-card img")
    .not(".btns img")
    .not(".gallery-group-img")
    .not(".getJsonPhoto-api img")
    .not(".getJsonTalk-api img")
    .each(function () {
      var $image = $(this);
      var imageCaption = $image.attr("alt");
      var $imageWrapLink = $image.parent("a");
      var $linkWrapDiv = $imageWrapLink.parent("div");
      if ($imageWrapLink.length < 1) {
        var src = this.getAttribute("data-src") || this.getAttribute("src");

        // 检查 URL 中是否包含代理关键字
        var proxyKeywords = ["sogoucdn.com"];
        var idx = src.lastIndexOf("?");
        var isProxyUrl = proxyKeywords.some((keyword) => src.includes(keyword));
        if (isProxyUrl) {
          // 截取需要的部分
          src = src;
          // return;
        } else {
          if (idx != -1) {
            src = src.substring(0, idx);
          }
        }
        $imageWrapLink = $image
          .wrap('<a href="' + src + '" class="fancybox"></a>')
          .parent("a");
        $linkWrapDiv = $imageWrapLink
          .wrap('<div class="fancybox"></div>')
          .parent("div");
      }

      $imageWrapLink.attr("data-fancybox", "images");
      if (imageCaption) {
        $imageWrapLink.attr("data-caption", imageCaption);
        if (!$linkWrapDiv.hasClass("image-caption")) {
          $linkWrapDiv.append(
            '<span class="image-caption">' + imageCaption + "</span>"
          );
        }
      }
    });

  Fancybox.bind('[data-fancybox="images"]', {
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [
          "zoomIn",
          "zoomOut",
          "toggle1to1",
          "rotateCCW",
          "rotateCW",
          "flipX",
          "flipY",
        ],
        right: ["slideshow", "thumbs", "close"],
      },
    },
  });
}
