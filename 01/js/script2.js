$(function () {
  // 대상을 변수에 저장
  const $tabMenu = $('.tab-menu > li');
  const $tabContents = $('.tab-con-item');

  console.log($tabMenu, $tabContents);

  // 초기 세팅 : 탭 콘텐츠가 첫번쨰만 뺴고 다 숨겨져 있어야 함
  tabAction(0);
  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  // 중복되는 동작을 함수로 정의
  function tabAction(index) {
    $tabContents.hide();
    $tabContents.eq(index).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');
  }
});
