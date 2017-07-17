/* global $ _ */

var IMG_LOADED = false
var ANI_FINISHED = false
window.__START__ = true

var $page1Obj = $('<div class="page" id="page-1">' +
  '<div class="page-1-nums">' +
    '<div class="page-1-num">' +
      '<div class="page-1-ps page-1-ps-1-1" id="page-1-ps-1-1" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-1-2" id="page-1-ps-1-2" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-1-3" id="page-1-ps-1-3" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-1-4" id="page-1-ps-1-4" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-1-5" id="page-1-ps-1-5" data-pix="5"></div>' +
    '</div>' +
    '<div class="page-1-num">' +
      '<div class="page-1-ps page-1-ps-2-1" id="page-1-ps-2-1" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-2-2" id="page-1-ps-2-2" data-pix="8"></div>' +
      '<div class="page-1-ps page-1-ps-2-3" id="page-1-ps-2-3" data-pix="4"></div>' +
      '<div class="page-1-ps page-1-ps-2-4" id="page-1-ps-2-4" data-pix="8"></div>' +
      '<div class="page-1-ps page-1-ps-2-5" id="page-1-ps-2-5" data-pix="6"></div>' +
    '</div>' +
    '<div class="page-1-num">' +
      '<div class="page-1-ps page-1-ps-3-1" id="page-1-ps-3-1" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-3-2" id="page-1-ps-3-2" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-3-3" id="page-1-ps-3-3" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-3-4" id="page-1-ps-3-4" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-3-5" id="page-1-ps-3-5" data-pix="5"></div>' +
    '</div>' +
    '<div class="page-1-num">' +
      '<div class="page-1-ps page-1-ps-4-1" id="page-1-ps-4-1" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-4-2" id="page-1-ps-4-2" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-4-3" id="page-1-ps-4-3" data-pix="6"></div>' +
      '<div class="page-1-ps page-1-ps-4-4" id="page-1-ps-4-4" data-pix="7"></div>' +
      '<div class="page-1-ps page-1-ps-4-5" id="page-1-ps-4-5" data-pix="5"></div>' +
    '</div>' +
    '<div class="clearfix"></div>' +
    '<div class="page-1-park" id="page-1-park">' +
      '<div class="page-1-park-inner" id="page-1-park-inner">' +
        '<img src="images/park.png" alt="">' +
      '</div>' +
    '</div>' +
    '<div class="page-1-percent" id="page-1-percent">0%</div>' +
  '</div>' +
'</div>')

var $page2Obj = $('<div class="page" id="page-2">' +
  '<img src="/images/logo.png" class="page-2-logo">' +
  '<img src="/images/home_text.png" class="page-2-text">' +
  '<img src="/images/building.png" class="page-2-building">' +
  '<img src="/images/logo.png" class="page-2-building-logo">' +
  '<img src="/images/plane.png" class="page-2-plane" id="page-2-plane">' +
  '<img src="/images/home_btn.png" class="page-2-btn" id="page-2-btn">' +
'</div>')

var $page3Obj = $('<div class="page" id="page-3">' +
  '<video class="page-3-video" id="page-3-video" src="/images/park.mp4" webkit-playsinline playsinline controls poster="/images/video_poster.jpg"></video>' +
'</div>')

var $page4Obj = $('<div class="page" id="page-4">' + 
  '<div id="panorama"></div>' + 
  '<div class="page-4-overlay" id="page-4-park-overview">' +
    '<div class="page-4-dialog">' +
      '<div class="page-4-dialog-inner">' +
        '<div class="page-4-dialog-title">' +
          '<img src="/images/icon_park_overview.png" alt="">' +
          '<span>园区概况</span>' +
        '</div>' +
        '<div class="page-4-dialog-content">' +
          '<p>2025 PARK，雄踞广州国家级空港经济区核心，是集工作、生活于一体的新一代科技园，将打造国际创业创新科技平台，助力企业转型升级。</p>' +
          '<img src="/images/park_overview.jpg" alt="">' +
          '<p>建筑面积达130万m² 聚焦智能电子科技领域</p>' +
        '</div>' +
      '</div>' +
      '<span class="page-4-dialog-close"></span> ' +
    '</div>' +
  '</div>' +
  '<div class="page-4-overlay" id="page-4-zone-adv">' +
    '<div class="page-4-dialog">' +
      '<div class="page-4-dialog-inner">' +
        '<div class="page-4-dialog-title">' +
          '<img src="/images/icon_zone_adv.png" alt="">' +
          '<span>区位优势</span>' +
        '</div>' +
        '<div class="page-4-dialog-content">' +
          '<p>2025 PARK依托区域交通优势，打造产业集聚平台，辐射带动周边地区的经济发展和产业提升。</p>' +
          '<img src="/images/zone_adv.jpg" alt="">' +
          '<p>距白云机场6公里、距广州北站7公里，20分钟抵达市中心，地铁、公交配套完备</p>' +
        '</div>' +
      '</div>' +
      '<span class="page-4-dialog-close"></span> ' +
    '</div>' +
  '</div>' +
  '<div class="page-4-overlay" id="page-4-job-life">' +
    '<div class="page-4-dialog">' +
      '<div class="page-4-dialog-inner">' +
        '<div class="page-4-dialog-title">' +
          '<img src="/images/icon_job_life.png" alt="">' +
          '<span>工作+生活</span>' +
        '</div>' +
        '<div class="page-4-dialog-content">' +
          '<p>2025 PARK不仅打造多元化办公空间，满足不同企业的发展需求；更完善园区生活配套，让工作与生活完美融合。</p>' +
          '<img src="/images/job_life.jpg" alt="">' +
          '<p>五类办公空间：创客卡位、独立单元、专属整层、LOFT空间和独栋办公楼；丰富生活配套：餐饮、健身、购物等一应俱全</p>' +
        '</div>' +
      '</div>' +
      '<span class="page-4-dialog-close"></span> ' +
    '</div>' +
  '</div>' +
  '<div class="page-4-overlay" id="page-4-industry-fund">' +
    '<div class="page-4-dialog">' +
      '<div class="page-4-dialog-inner">' +
        '<div class="page-4-dialog-title">' +
          '<img src="/images/icon_industry_fund.png" alt="">' +
          '<span>产业基金+基地</span>' +
        '</div>' +
        '<div class="page-4-dialog-content">' +
          '<p>2025 PARK联合国内外多个金融机构，共同打造“产业基金+基地”模式，整合资源驱动企业成长。</p>' +
          '<img src="/images/industry_fund.jpg" alt="">' +
          '<p>牵头设立广州空港双创产业基金，规模达10亿元。全球资金合作伙伴：中国：融信资本；以色列：吉萨风投</p>' +
        '</div>' +
      '</div>' +
      '<span class="page-4-dialog-close"></span> ' +
    '</div>' +
  '</div>' +
  '<div class="page-4-overlay" id="page-4-wise-service">' +
    '<div class="page-4-dialog">' +
      '<div class="page-4-dialog-inner">' +
        '<div class="page-4-dialog-title">' +
          '<img src="/images/icon_wise_service.png" alt="">' +
          '<span>智慧服务</span>' +
        '</div>' +
        '<div class="page-4-dialog-content">' +
          '<p>2025 PARK打造六大服务平台，为企业带来全方位成长支持，还创新开发了智慧园区管理系统，让服务更智能、高效。</p>' +
          '<img src="/images/wise_service.jpg" alt="">' +
          '<p>六大服务平台：综合、金融、孵化、人才、公共科研及全球化运营平台。借助智慧园区管理系统，在APP/WAP上就能轻松获取所需服务</p>' +
        '</div>' +
      '</div>' +
      '<span class="page-4-dialog-close"></span> ' +
    '</div>' +
  '</div>' +
  '<div class="page-4-form" id="page-4-join-form">' +
    '<img src="/images/logo.png" alt="" class="page-4-form-logo">' +
    '<div class="page-4-form-inner">' +
      '<form action="" id="page-4-form">' +
        '<div class="page-4-form-control">' +
          '<span class="page-4-form-icon page-4-form-icon-name"></span>' +
          '<input type="text" name="name" class="page-4-form-input" placeholder="联系人姓名" maxlength="10">' +
          '<div class="clearfix"></div>' +
          '<div class="page-4-form-err">请输入联系人姓名</div>' +
        '</div>' +
        '<div class="page-4-form-control">' +
          '<span class="page-4-form-icon page-4-form-icon-mobile"></span>' +
          '<input type="tel" name="phone" class="page-4-form-input" placeholder="手机号码" maxlength="15">' +
          '<div class="clearfix"></div>' +
          '<div class="page-4-form-err">请输入有效的手机号码</div>' +
        '</div>' +
        '<input type="image" src="/images/join_btn.png" class="page-4-form-btn">' +
      '</form>' +
      '<div class="page-4-form-info">' +
        '<img src="/images/icon_phone.png" alt="" width="20">' +
        '<span>投资热线：020-28606888</span>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>')

$(function() {
  function genPix(num) {
    var r = _.random
    var h = ''
    for (var i = 0; i < num; i++) {
      var p = $('<div class="page-1-p"></div>')
      var style = 'translateX(' + r(-30, 10) + 'px)'
      style += ' translateY(' + r(-70, -30) + 'px)'
      style += ' scale(' + r(0.5, 2.0) + ')'
      style += ' rotateX(' + r(10, 50) + 'deg)'
      style += ' rotateY(' + r(10, 50) + 'deg)'
      style += ' rotateZ(' + r(10, 50) + 'deg)'
      p.css('transform', style)
      h += p[0].outerHTML
    }
    return h
  }

  function removeTran(o) {
    o.fadeIn(200, function() {
      o.find('div.page-1-p').each(function() {
        $(this).css('transform', '')
      })
    })
  }

  function bindTranEnd(o, cb) {
    o.find('div.page-1-p:first').on('transitionend', cb)
  }

  function pageLeave(o) {
    o.addClass('leaving').on('animationend', function() {
      $(this).remove()
    })
  }

  function clickHandlerFunc(e, data) {
    var $o = $(data.target)
    $o.css('display', 'block')
    setTimeout(function() {
      $o.addClass('in')
    }, 50)
  }

  if (window.__START__) {
    $('#root').prepend($page1Obj)
  }

  $('.page-1-ps').each(function() {
    var $ps = $(this)
    var num = parseInt($ps.data('pix'), 10)
    $ps.html(genPix(num))
  })

  var $page_1_park_inner = $('#page-1-park-inner')
  var $page_1_percent = $('#page-1-percent')
  var loadFiles = [
    '/images/building.png',
    '/images/close.png',
    '/images/home_btn.png',
    '/images/home_text.png',
    '/images/icon_contact.png',
    '/images/icon_industry_fund.png',
    '/images/icon_job_life.png',
    '/images/icon_mobile.png',
    '/images/icon_park_overview.png',
    '/images/icon_phone.png',
    '/images/icon_wise_service.png',
    '/images/icon_zone_adv.png',
    '/images/industry_fund.jpg',
    '/images/job_life.jpg',
    '/images/join_btn.png',
    '/images/logo.png',
    '/images/p.jpg',
    '/images/park.png',
    '/images/park_overview.jpg',
    '/images/plane.png',
    '/images/sky.jpg',
    '/images/spot_industry_fund.png',
    '/images/spot_job_life.png',
    '/images/spot_park_overview.png',
    '/images/spot_wise_service.png',
    '/images/spot_zone_adv.png',
    '/images/video_poster.jpg',
    '/images/wise_service.jpg',
    '/images/zone_adv.jpg'
  ]
  var filesLen = loadFiles.length
  function afterLoad() {
    // return
    pageLeave($('#page-1'))
    $('#root').prepend($page2Obj)
    $('#page-2-plane').on('animationend', function() {
      $(this).hide()
    })
    $('#page-2-btn').on('click', function(e) {
      pageLeave($('#page-2'))
      $('#root').prepend($page3Obj)
      $('#page-3-video').on('ended', function(e) {
        pageLeave($('#page-3'))
        $('#root').prepend($page4Obj)
        window.pannellum.viewer('panorama', {
          type: 'equirectangular',
          panorama: '/images/p.jpg',
          autoLoad: true,
          showZoomCtrl: false,
          showFullscreenCtrl: false,
          compass: false,
          orientationOnByDefault: true,
          minPitch: 0,
          maxPitch: 0,
          minHfov: 60,
          maxHfov: 60,
          hotSpots: [
            {
              pitch: 10,
              yaw: 0,
              cssClass: 'park-hot-spot hs-park-overview',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-park-overview' }
            },
            {
              pitch: 0,
              yaw: 60,
              cssClass: 'park-hot-spot hs-zone-adv',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-zone-adv' }
            },
            {
              pitch: 0,
              yaw: 120,
              cssClass: 'park-hot-spot hs-job-life',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-job-life' }
            },
            {
              pitch: 0,
              yaw: 180,
              cssClass: 'park-hot-spot hs-industry-fund',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-industry-fund' }
            },
            {
              pitch: 0,
              yaw: 240,
              cssClass: 'park-hot-spot hs-wise-service',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-wise-service' }
            },
            {
              pitch: 0,
              yaw: 300,
              cssClass: 'park-hot-spot hs-join-form',
              clickHandlerFunc: clickHandlerFunc,
              clickHandlerArgs: { target: '#page-4-join-form' }
            }
          ]
        })
      })
    })
  }
  function loadFile(files, len) {
    $page_1_percent.text(Math.floor((len - files.length) / len * 100) + '%')
    if (files.length) {
      var img = new Image()
      img.onload = function() {
        setTimeout(function() {
          loadFile(files, len)
        },100)
      }
      img.src = files.shift()
    }
    else {
      IMG_LOADED = true
      if (ANI_FINISHED) {
        setTimeout(afterLoad, 200)
      }
    }
  }
  loadFile(loadFiles, filesLen)

  $('#root').on('click', '.page-4-dialog-close', function() {
    var $a = $(this).closest('.page-4-overlay')
    $a.one('transitionend', function() {
      $a.css('display', 'none')
    })
    $a.removeClass('in')
  })

  $('#root').on('submit', '#page-4-form', function(e) {
    e.preventDefault()
    var hasErr = false
    var $form = $(this)
    $form.find('div.page-4-form-err').hide()
    var nameInput = $form.find('input[name="name"]')
    if (!nameInput.val()) {
      nameInput.closest('div.page-4-form-control').find('div.page-4-form-err').show()
      hasErr = true
    }

    var phoneInput = $form.find('input[name="phone"]')
    if (!phoneInput.val()) {
      phoneInput.closest('div.page-4-form-control').find('div.page-4-form-err').show()
      hasErr = true
    }

    if (!/^1\d{10}$/.test(phoneInput.val())) {
      phoneInput.closest('div.page-4-form-control').find('div.page-4-form-err').show()
      hasErr = true
    }

    if (!hasErr) {
      alert('提交成功')
      var $f = $('#page-4-join-form')
      $f.one('transitionend', function() {
        $f.css('display', 'none')
      })
      $f.removeClass('in')
    }
    return false
  })

  // ps
  var $page_1_ps_1_1 = $('#page-1-ps-1-1')
  var $page_1_ps_1_2 = $('#page-1-ps-1-2')
  var $page_1_ps_1_3 = $('#page-1-ps-1-3')
  var $page_1_ps_1_4 = $('#page-1-ps-1-4')
  var $page_1_ps_1_5 = $('#page-1-ps-1-5')

  var $page_1_ps_2_1 = $('#page-1-ps-2-1')
  var $page_1_ps_2_2 = $('#page-1-ps-2-2')
  var $page_1_ps_2_3 = $('#page-1-ps-2-3')
  var $page_1_ps_2_4 = $('#page-1-ps-2-4')
  var $page_1_ps_2_5 = $('#page-1-ps-2-5')

  var $page_1_ps_3_1 = $('#page-1-ps-3-1')
  var $page_1_ps_3_2 = $('#page-1-ps-3-2')
  var $page_1_ps_3_3 = $('#page-1-ps-3-3')
  var $page_1_ps_3_4 = $('#page-1-ps-3-4')
  var $page_1_ps_3_5 = $('#page-1-ps-3-5')

  var $page_1_ps_4_1 = $('#page-1-ps-4-1')
  var $page_1_ps_4_2 = $('#page-1-ps-4-2')
  var $page_1_ps_4_3 = $('#page-1-ps-4-3')
  var $page_1_ps_4_4 = $('#page-1-ps-4-4')
  var $page_1_ps_4_5 = $('#page-1-ps-4-5')
  // 2
  removeTran($page_1_ps_1_1)
  bindTranEnd($page_1_ps_1_1, function() {
    removeTran($page_1_ps_1_2)
  })
  bindTranEnd($page_1_ps_1_2, function() {
    removeTran($page_1_ps_1_3)
  })
  bindTranEnd($page_1_ps_1_3, function() {
    removeTran($page_1_ps_1_4)
  })
  bindTranEnd($page_1_ps_1_4, function() {
    removeTran($page_1_ps_1_5)
    $page_1_park_inner.width('25%')
  })

  // 0
  bindTranEnd($page_1_ps_1_5, function() {
    removeTran($page_1_ps_2_1)
  })
  bindTranEnd($page_1_ps_2_1, function() {
    removeTran($page_1_ps_2_2)
  })
  bindTranEnd($page_1_ps_2_2, function() {
    removeTran($page_1_ps_2_3)
  })
  bindTranEnd($page_1_ps_2_3, function() {
    removeTran($page_1_ps_2_4)
  })
  bindTranEnd($page_1_ps_2_4, function() {
    removeTran($page_1_ps_2_5)
    $page_1_park_inner.width('50%')
  })

  // 2_
  bindTranEnd($page_1_ps_2_5, function() {
    removeTran($page_1_ps_3_1)
  })
  bindTranEnd($page_1_ps_3_1, function() {
    removeTran($page_1_ps_3_2)
  })
  bindTranEnd($page_1_ps_3_2, function() {
    removeTran($page_1_ps_3_3)
  })
  bindTranEnd($page_1_ps_3_3, function() {
    removeTran($page_1_ps_3_4)
  })
  bindTranEnd($page_1_ps_3_4, function() {
    removeTran($page_1_ps_3_5)
    $page_1_park_inner.width('75%')
  })

  // 5
  bindTranEnd($page_1_ps_3_5, function() {
    removeTran($page_1_ps_4_1)
  })
  bindTranEnd($page_1_ps_4_1, function() {
    removeTran($page_1_ps_4_2)
  })
  bindTranEnd($page_1_ps_4_2, function() {
    removeTran($page_1_ps_4_3)
  })
  bindTranEnd($page_1_ps_4_3, function() {
    removeTran($page_1_ps_4_4)
  })
  bindTranEnd($page_1_ps_4_4, function() {
    removeTran($page_1_ps_4_5)
    $page_1_park_inner.width('100%')
    $('#page-1-park').on('transitionend', function() {
      ANI_FINISHED = true
      if (IMG_LOADED) {
        setTimeout(afterLoad, 200)
      }
    })
  })

})
