$(function () {
  // 대상을 변수에 저장
  const $tabMenu = $('.tab-menu > li');
  const $tabContents = $('.tab-con-item');

  console.log($tabMenu, $tabContents);

  // 초기 세팅 : 탭 콘텐츠가 첫번쨰만 뺴고 다 숨겨져 있어야 함
  tabAction();
  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    $tabMenu.removeClass('on');

    let idx = $(this).index();

    $tabMenu.eq(idx).addClass('on');

    $tabContents.hide();

    $tabContents.eq(idx).show();
  });

  // 중복되는 동작을 함수로 정의
  function tabAction() {
    $tabContents.hide();
    $tabContents.eq(0).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(0).addClass('on');
  }
});
