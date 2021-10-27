sap.ui.define(function () { 'use strict';

  var dialogSvg = `<svg width="160" height="160" viewBox="0 0 160 160" id="tnt-Dialog-UnsuccessfulAuth">
  <path fill="var(--sapIllus_PatternShadow)" d="M139.022,41.1663 L138.965,41.1663 L137.747,41.1663 L137.747,51.3033 L137.747,55.1843 L137.747,120.2153 C137.747,122.3273 136.035,124.0393 133.922,124.0393 L28.156,124.0393 L28.158,126.5883 C28.158,128.7013 29.87,130.4143 31.981,130.4143 L139.022,130.4143 C141.134,130.4143 142.846,128.7013 142.846,126.5903 L142.846,44.9913 C142.846,42.8793 141.134,41.1663 139.022,41.1663" class="sapIllus_PatternShadow"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M133.6405,124.2475 L27.1075,124.2475 C24.8395,124.2475 23.0005,122.4085 23.0005,120.1415 L23.0005,39.1065 C23.0005,36.8395 24.8395,35.0005 27.1075,35.0005 L133.6405,35.0005 C135.9085,35.0005 137.7465,36.8395 137.7465,39.1065 L137.7465,120.1415 C137.7465,122.4085 135.9085,124.2475 133.6405,124.2475" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_BrandColorSecondary)" d="M137.747,51.5746 L23,51.5746 L23,39.1946 C23,36.8786 24.878,35.0006 27.194,35.0006 L133.373,35.0006 C135.789,35.0006 137.747,36.9586 137.747,39.3746 L137.747,51.5746 Z" class="sapIllus_BrandColorSecondary"/>
  <path fill="var(--sapIllus_StrokeDetailColor)" d="M133.9227,122.973 L26.8247,122.973 C25.4167,122.973 24.2757,121.831 24.2757,120.423 L24.2757,51.575 L26.5977,51.575 L136.4727,51.586 L136.4727,120.423 C136.4727,121.831 135.3307,122.973 133.9227,122.973 M136.4727,38.826 L136.4727,50.3 L24.2757,50.3 L24.2757,38.826 C24.2757,37.416 25.4167,36.275 26.8247,36.275 L133.9227,36.275 C135.3307,36.275 136.4727,37.416 136.4727,38.826 M133.9227,35 L133.3187,35 L26.3027,35 L26.2447,35 C24.0417,35 23.0007,37.157 23.0007,38.694 L23.0007,51.575 L23.0007,120.423 C23.0007,122.536 24.7127,124.247 26.8247,124.247 L133.9227,124.247 C136.0347,124.247 137.7467,122.536 137.7467,120.423 L137.7467,55.392 L137.7467,51.511 L137.7467,38.826 C137.7467,36.712 136.0347,35 133.9227,35" class="sapIllus_StrokeDetailColor"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M35.1547 43.2875C35.1547 44.6565 34.0447 45.7665 32.6757 45.7665 31.3057 45.7665 30.1957 44.6565 30.1957 43.2875 30.1957 41.9185 31.3057 40.8085 32.6757 40.8085 34.0447 40.8085 35.1547 41.9185 35.1547 43.2875M42.7806 43.2875C42.7806 44.6565 41.6706 45.7665 40.3016 45.7665 38.9316 45.7665 37.8216 44.6565 37.8216 43.2875 37.8216 41.9185 38.9316 40.8085 40.3016 40.8085 41.6706 40.8085 42.7806 41.9185 42.7806 43.2875M50.4066 43.2875C50.4066 44.6565 49.2966 45.7665 47.9266 45.7665 46.5576 45.7665 45.4476 44.6565 45.4476 43.2875 45.4476 41.9185 46.5576 40.8085 47.9266 40.8085 49.2966 40.8085 50.4066 41.9185 50.4066 43.2875" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_Layering1)" d="M62.3173 71.8848C68.4063 71.8848 73.4983 76.1038 74.8633 81.7738L74.8633 81.7738 108.4403 81.7738C110.0463 81.7738 111.3483 83.0758 111.3483 84.6828 111.3483 86.2888 110.0463 87.5908 108.4403 87.5908L108.4403 87.5908 107.3893 87.5908 107.3893 94.0448C107.3893 94.3178 107.1693 94.5388 106.8963 94.5388L106.8963 94.5388 103.2533 94.5388C102.9823 94.5388 102.7603 94.3178 102.7603 94.0448L102.7603 94.0448 102.7603 92.3778C102.7603 92.1068 102.5403 91.8858 102.2683 91.8858L102.2683 91.8858 98.5733 91.8858C98.2973 91.8858 98.0763 92.1098 98.0803 92.3838L98.0803 92.3838 98.0843 94.0408C98.0863 94.3138 97.8653 94.5388 97.5903 94.5388L97.5903 94.5388 93.8583 94.5388C93.5863 94.5388 93.3653 94.3178 93.3653 94.0448L93.3653 94.0448 93.3653 87.5908 74.9253 87.5908C73.6503 93.3838 68.4943 97.7218 62.3173 97.7218 55.1823 97.7218 49.3983 91.9388 49.3983 84.8038 49.3983 77.6698 55.1823 71.8848 62.3173 71.8848zM62.4141 78.5744C59.0281 78.5744 56.2821 81.3194 56.2821 84.7064 56.2821 88.0934 59.0281 90.8384 62.4141 90.8384 65.8011 90.8384 68.5461 88.0934 68.5461 84.7064 68.5461 81.3194 65.8011 78.5744 62.4141 78.5744zM136.4732 21.9876C125.6912 21.9876 116.9202 30.7586 116.9202 41.5396 116.9202 52.3206 125.6912 61.0916 136.4732 61.0916 147.2522 61.0916 156.0242 52.3206 156.0242 41.5396 156.0242 30.7586 147.2522 21.9876 136.4732 21.9876" class="sapIllus_Layering1"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M139.3931,41.5394 L146.4911,34.4394 C146.8811,34.0494 147.0971,33.5294 147.0971,32.9774 C147.0971,32.4264 146.8811,31.9064 146.4911,31.5174 C145.7121,30.7354 144.3481,30.7334 143.5701,31.5174 L136.4721,38.6174 L129.3751,31.5174 C128.5981,30.7354 127.2341,30.7344 126.4541,31.5164 C126.0641,31.9064 125.8481,32.4264 125.8481,32.9774 C125.8481,33.5294 126.0641,34.0494 126.4541,34.4384 L133.5511,41.5394 L126.4541,48.6404 C125.6481,49.4454 125.6481,50.7574 126.4541,51.5634 C127.2371,52.3444 128.5961,52.3434 129.3751,51.5624 L136.4721,44.4634 L143.5701,51.5634 C143.9591,51.9534 144.4781,52.1684 145.0301,52.1684 C145.5821,52.1684 146.1001,51.9534 146.4911,51.5624 C147.2971,50.7574 147.2971,49.4454 146.4911,48.6404 L139.3931,41.5394 Z" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_ObjectFillColor)" d="M156.024,41.5394 C156.024,52.3204 147.253,61.0924 136.473,61.0924 C125.691,61.0924 116.92,52.3204 116.92,41.5394 C116.92,30.7594 125.691,21.9874 136.473,21.9874 C147.253,21.9874 156.024,30.7594 156.024,41.5394 M136.473,18.0004 C123.494,18.0004 112.933,28.5604 112.933,41.5394 C112.933,54.5194 123.494,65.0794 136.473,65.0794 C149.453,65.0794 160.012,54.5194 160.012,41.5394 C160.012,28.5604 149.453,18.0004 136.473,18.0004" class="sapIllus_ObjectFillColor"/>
  <path fill="var(--sapIllus_BackgroundColor)" d="M139.8463,145.9212 C139.8463,148.4062 113.5123,150.4212 81.0273,150.4212 C48.5413,150.4212 22.2073,148.4062 22.2073,145.9212 C22.2073,143.4362 48.5413,141.4212 81.0273,141.4212 C113.5123,141.4212 139.8463,143.4362 139.8463,145.9212" class="sapIllus_BackgroundColor"/>
</svg>`;

  return dialogSvg;

});
