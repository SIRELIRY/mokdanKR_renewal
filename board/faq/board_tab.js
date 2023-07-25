jQuery(document).ready(function () {
  var ibNo = getQueryString("category_no");
  var board_title_now = jQuery(".titleArea h2 font").text();

  /* 이벤트 게시판 탭 변경.   */
  if (board_title_now == "FAQ") {
    if (ibNo == "1") {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:nth-child(1) + li").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
      jQuery(
        ".xans-board-listpackage-4 .xans-board-list-4 li .imgLink img"
      ).css("opacity", "0.6");
    } else if (ibNo == "2") {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:nth-child(2) + li").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
      jQuery(
        ".xans-board-listpackage-4 .xans-board-list-4 li .imgLink img"
      ).css("opacity", "0.6");
    } else if (ibNo == "3") {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:nth-child(3) + li").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
      jQuery(
        ".xans-board-listpackage-4 .xans-board-list-4 li .imgLink img"
      ).css("opacity", "0.6");
    } else if (ibNo == "4") {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:nth-child(4) + li").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
      jQuery(
        ".xans-board-listpackage-4 .xans-board-list-4 li .imgLink img"
      ).css("opacity", "0.6");
    } else if (ibNo == "5") {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:nth-child(5) + li").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
      jQuery(
        ".xans-board-listpackage-4 .xans-board-list-4 li .imgLink img"
      ).css("opacity", "0.6");
    } else {
      jQuery(".event_tab li").removeClass("active");
      jQuery(".event_tab li:first-child").addClass("active");
      jQuery(".xans-board-listpackage-4 .xans-board-list-4 li").css(
        "opacity",
        "1"
      );
    }
  }

  /* 나머지 게시판 탭 변경.   */
  jQuery(".event_tab li").each(function (index) {
    var board_title_name = jQuery(this).attr("rel");
    if (board_title_now == board_title_name) {
      jQuery(this).addClass("active");
    }
  });
});
