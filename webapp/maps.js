var G_INCOMPAT = false;
function GScript(src) 
 {
  document.write('<' + 'script src="' + src + '"' +' type="text/javascript"><' + '/script>');
 }
function GBrowserIsCompatible(setBodyClass) 
 {
  if (G_INCOMPAT) return false;
  if (!window.RegExp) return false;
  var AGENTS = ["opera","msie","safari","firefox","netscape","mozilla"];
  var agent = navigator.userAgent.toLowerCase();
  for (var i = 0; i < AGENTS.length; i++) 
   {
    var agentStr = AGENTS[i];
    if (agent.indexOf(agentStr) != -1)
     {
      if (setBodyClass && document.body) 
       {
        document.body.className = agentStr;
       }
      var versionExpr = new RegExp(agentStr + "[ \/]?([0-9]+(\.[0-9]+)?)");
      var version = 0;
      if (versionExpr.exec(agent) != null) 
       {
        version = parseFloat(RegExp.$1);
       }
      if (agentStr == "opera") return version >= 7;
      if (agentStr == "safari") return version >= 125;
      if (agentStr == "msie") return (version >= 5.5 &&agent.indexOf("powerpc") == -1);
      if (agentStr == "netscape") return version > 7;
      if (agentStr == "firefox") return version >= 0.8;
     }
   }
  return !!document.getElementById;
 }
function GVerify() {}
function GLoad() 
 {
  GAddMessages(
   {
    1415: '.',1416: ',',10037: '�}�l�a�}',10038: '�����a�}',10093: '�ϥα���',10095: '�Y�n�˵��Ҧ��i�b�ù��W��ܪ��ԲӸ�ơA�ШϥΦa�Ϯ��䪺\x22�C�L\x22�s���C',10096: '',10049: '�a��',10111: '�a��',10120: '�ܩ�p�A�ڭ̨S���Ӱϰ�o���Y��h�Ū��a�ϡC\x3cp\x3e�иյ��Y�p�a�ϡA�H�˵���j���ϰ�\x3c/p\x3e�C',10050: '�ìP',10112: '�ìP',10121: '�ܩ�p�A�ڭ̨S���Ӱϰ�o���Y��h�Ū��Ϥ��C\x3cp\x3e�иյ��Y�p�Ϥ��A�H�˵���j���ϰ�\x3c/p\x3e�C',10116: '�V�X�a��',10117: '�V�X',10021: '��j',10022: '�Y�p',10023: '���@�U�]�w�Y��h��',10024: '�즲�H�Y��',10507: '�V������',10508: '�V�k����',10509: '�V�W����',10510: '�V�U����',10029: '��^�W�@�ӵ��G',10511: '��ܵ�D�a��',10512: '��ܽìP��',10513: '��ܥ]�t��D�W�٪��ìP��',10806: '���@�U�H�b Google �a�ϤW�˵����ϰ�',1616: '����',1547: '��',10109: '����',10110: '�^�`',11259: '���ù�',10130: '�a�}',10131: '�ԲӸ��',10908: '�L���D',10937: '���x�s����m',10938: '�إ߷s�a��...',10940: '�إߦa�Ϯɵo�Ϳ��~',10941: '�w�x�s�� %1$s',10942: '�x�s�a�ϼаO�ɵo�Ϳ��~',10943: '�x�s��...',10945: '�s�W�a�ϼаO',10946: 'ø�s�u��',10947: 'ø�s�Ϊ�',10948: '�[�J�Ϥ�',11371: '�x�s�� \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e',10985: '��j',10986: '�Y�p',11047: '�N�a�ϩ󦹸m��',10983: '�M���j�M���G',10935: '�x�s�ܧڪ��a��',11271: '���u�_�I',11272: '���u���I',0: ''
   }
              );
 GAddMessages(
  {
   10807: '���p',10808: '��ܸ��p',10809: '���ø��p',11089: '\x3ca href\x3d\x22javascript:void(0);\x22\x3e��j\x3c/a\x3e�H�˵����ϰ쪺���p',10293: '�s�W',10294: '�x�s',10295: '����',10296: '�R��',10296: '�R��',10297: '�s��m�G',10298: '�ҥΦ�m���۰��x�s�\��',10299: '����G',10299: '����G',10300: '�Ҧ�',10300: '�Ҧ�',10301: '�L',10301: '�L',10302: '�s��',10303: '�w�]',10304: '����',10304: '����',10304: '����',10305: '��m',10305: '��m',10305: '��m',10307: '�S���x�s����m�C',10308: '�ϥΦ���m������l�a���˵�',10309: '���n�ϥΦ���m������l�a���˵�',11298: '�󴺵���',11303: '�󴺵��ϻ���',11300: '���õ󴺵���',540: '�s�\��I',11274: '�Y�n�ϥε󴺵��ϡA�z�����֦� Adobe Flash Player �� %1$d ���Χ�s�����C',11299: '��ܵ󴺵���',11302: '�N�ک즲��Ц��Ŧ���ت���D�W�C\x3cbr\x3e �z�]�i�H�����I��Ц��Ŧ���ت���D�C',11382: '���o�̷s�����ְ{�O���鼽�񾹡C',11304: '��^�󴺵���',11305: '�ϥε󴺵���',11306: '�b�Y�ǯS�w����m���A�z�i�H�b��D�h�Ū��Ϥ����i���˵��M�s���C ��k�p�U�G',11307: '�Ŧ���ت��ܸӸ��q�����󴺵��ϥi���˵��C',11308: '���ϥܥi��ܱz�b�a�ϤW����m�C ���b�Y���ܱz�n�e������V�C �z�i�H�즲���ϥܨ��s����L��m�A �]�i�H�������U�Ц��Ŧ���ت����q�����e���C',11309: '�즲�󴺵��ϡA�i�` 360\x26deg; �˵��C �z�i�H�ϥνb�Y���s�J���s����D�A �]�i�H�ϥ���L�W����V��C',11314: '�ܩ�p�A�ѩ�ϥλݨD�e�j�A�󴺵��ϥثe�L�k�ϥΡC\x3cbr\x3e�еy��A�աI',11315: '�����������a�}',1559: '�_',1560: '�n',1561: '��',1562: '�F',1608: '��_',1591: '�F�n',1605: '��n',1606: '�F�n',11298: '�󴺵���',11301: '\x3ca href\x3d\x22javascript:void(0);\x22\x3e��j\x3c/a\x3e�H����󴺵��Ϧ�m',11302: '�N�ک즲��Ц��Ŧ���ت���D�W�C\x3cbr\x3e �z�]�i�H�����I��Ц��Ŧ���ت���D�C',11304: '��^�󴺵���',11305: '�ϥε󴺵���',11306: '�b�Y�ǯS�w����m���A�z�i�H�b��D�h�Ū��Ϥ����i���˵��M�s���C ��k�p�U�G',11307: '�Ŧ���ت��ܸӸ��q�����󴺵��ϥi���˵��C',11308: '���ϥܥi��ܱz�b�a�ϤW����m�C ���b�Y���ܱz�n�e������V�C �z�i�H�즲���ϥܨ��s����L��m�A �]�i�H�������U�Ц��Ŧ���ت����q�����e���C',11309: '�즲�󴺵��ϡA�i�` 360\x26deg; �˵��C �z�i�H�ϥνb�Y���s�J���s����D�A �]�i�H�ϥ���L�W����V��C',11310: '�^�����A�����Ϥ�',11311: 'Google ��󥻨��Ҵ��Ѫ��A�ȫD�`�����C �ШϥΤU�C�s���Ӵ��X�z��󤣷����󴺵��Ϫ��ü{�C',11312: '�ثe���󴺵��ϡG',11313: '�^�����A�����Ϥ�',10001: 'Google �a��',10018: '���J��...',10317: '�л\�ܦ��a�ϤW�����e�O�ѲĤT�责�ѡAGoogle �惡�����t�d�C',11068: '�إ߷s�a��',11112: '%1$s �w�����C',11113: '�_��',11154: '���s���J',11166: '����',11169: '�P���A���s�u�ɵo�Ͱ��D�A�Цb 1 �����H��A�դ@���C',11170: '����',11210: '�s�W�p�u��',11230: '�L�k���J...',11242: '�s��]�w',11251: '���˪��p�u��',11255: '�إߪ̡G \x3cspan class\x3d\x22mmauthor\x22\x3e%1$s\x3c/span\x3e',11265: '�Y�Ǥ��e�w�g����',11266: '��j�H�˵���h',11341: '�ѧګإ�',11342: '�ѥL�H�إ�',11365: '�ӤH�� %1$s',11366: '\x3cb\x3e�s�W\x3c/b\x3e��L�H�إߪ����ʦa�ϤΤu��C',11367: '\x3cb\x3e�إ�\x3c/b\x3e�ӤH�Ʀa�Ϥε��ѡA�ä��ɵ��B�͡B�a�H�Ψ�L���͡C',11368: 'http://maps.google.com/support/bin/answer.py?answer\x3d67842\x26hl\x3dzh-TW',11369: 'http://maps.google.com/support/bin/answer.py?answer\x3d68480\x26hl\x3dzh-TW',11370: '�ԲӤ��e \x26raquo;',11684: '���\��ëD�� Google �إߡC�\�ണ�Ѫ̥i��|���o�z�b�U���J����ơC',10018: '���J��...',160: '\x3cH1\x3e���A�����~\x3c/H1\x3e���A���o�ͼȮɿ��~�A�L�k�����z���n�D�C \x3cp\x3e�Цb�X�����H��A�դ@���C\x3c/p\x3e',10691: '/',10692: '���~',10693: '0',11198: '�����̪�o���ɶ��G',11655: '...',10917: '���@�U�N�ک�b�a�ϤW',10918: '���@�U�}�lø�s�u��',10919: '���@�U�}�lø�s�Ϊ�',10920: '�ഫ���¤�r�|�򥢳����榡�C �n�~��ܡH',10295: '����',10921: '�T�w',10922: '���D',10785: '����',10923: 'RTF �榡',10926: '�u���C��',10927: '�e�� (����)',10928: '�u���z����',10929: '�R���o�@�I',10930: '�~�򦹽u��',10931: '�s�W�@���I',10933: '��J�C��',10934: '��J�z����',10940: '�إߦa�Ϯɵo�Ϳ��~',10941: '�w�x�s�� %1$s',10942: '�x�s�a�ϼаO�ɵo�Ϳ��~',10943: '�x�s��...',10908: '�L���D',10944: '��� / �s��a�ϥ\��',10945: '�s�W�a�ϼаO',10946: 'ø�s�u��',10947: 'ø�s�Ϊ�',10948: '�[�J�Ϥ�',10949: '�x�s',10950: '�w�x�s',10952: '�п�J�Ϥ��� URL�C',11761: '�п�J�n�л\�b�a�ϤW���v�� URL�C\n\n�Ҧp�G%1$s',10959: '�s��',10960: '�R��',10961: '�즲�H���m���u��',10962: '�즲�H���m���Ϊ�',10963: '�즲�H���ʳo���I',10964: '�즲�H���ʳo���I',10965: '�s����U�H�������Ϊ��C',10966: '���@�U�~��ø�s�Ϊ�',10967: '�s����U�H��������',10968: '���@�U�~��ø�s�u��',11054: '�즲�H���ʦ��a�ϼаO',10969: '�¤�r',10970: '�s�� HTML',10868: '�Х�����z�n�����s������r�C',10869: '��J URL',10870: '�W�j��',10871: '�j��',10872: '���`',10873: '�p',10874: '����',10875: '����',10876: '���u',10877: '�r��',10878: '�j�p',10879: '��r�C��',10880: '�Щ��C��',10881: '�����榡',10882: '�s��',10883: '�s���M��',10884: '���زŸ��C��',10885: '����Y��',10886: '�W�[�Y��',10887: '�a�����',10888: '�m��',10889: '�a�k���',10890: '���J�Ϥ�',11098: '���`',11099: 'Times New Roman',11117: 'Arial',11101: 'Courier New',11102: '��v��',11103: 'Trebuchet',11104: 'Verdana',10913: '�z�T�w�n�R�����a�ϡH',10971: '�z�T�w�n�R�����a�ϼаO�ܡH',10972: '�z�T�w�n�R�����u���H',10973: '�z�T�w�n�R�����Ϊ��H',10976: '�z�T�w�n���a�ϤW���x�s���ܧ�ܡH',10977: '�C��',10978: '�z����',10979: '�w��J�H',10980: '�i���\��',10981: '��',10982: '��e (����)',11018: '���e',10914: '���a�Ϥ��s�b�C',11134: '�s����D / �]�w',11068: '�إ߷s�a��',10529: '�ڪ��a��',11055: '�L�k�P���A���s�u�C',11056: '�̫��x�s�� %1$s',11057: '�s��u���˦�',11059: '�ഫ�H�񺡧Ϊ�',11058: '�s��Ϊ��˦�',11072: '�ۤ�',11110: '�W�L�r���r�ƪ��W���C',11124: '�z�w�g�n�X�uGoogle �b��v�C',11125: '�еn�J',11126: '�Y�n�x�s�a�ϡA�ХH %1$s �n�J',11127: '�ܩ�p�A�ڭ̹J��޳N�W�����D�C\x3cbr /\x3e(���~�N�X %1$d)',11128: '�L�k�x�s�C',11129: '�Ȩ��˵�',11130: '���}',11131: '�����}',11178: '�j�M���G���]�t���}�a�ϡC',11179: '�ԲӤ��e',11133: 'javascript:void(0)',11371: '�x�s�� \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e',10734: 'Internal only',11551: '�w�]�ϥ�',11552: '�ڪ��ϥ�',11553: '�s�W�ϥ�',11554: '�s���ܺ����W�� JPG�BGIF�BBMP �� PNG �ɮסC',11555: '�j�� 64x64 �������ϥܦb�a�ϤW�|�Q�Y�p�C',11556: '��J�s�ϥܪ� URL�C',10330: '\x26laquo;�W�@�B',11535: '�`�Z���G',11585: '�פJ KML',11586: '�q KML�BKMZ �� GeoRSS �ɮ׷s�W�a�ϸ�Ʀܦ��a�ϡC �o�i��n��X�����ɶ��A���z�����s�u���t�צөw�C',11587: '�ɮפj�p�W���G 10MB',11588: '�s���z���q���A����n�W�����a�ϸ��',11589: '�M��',11590: '�άO��J���W�a�ϸ�ƪ� URL',11591: '�H�W���᪺�ɮר��N�a�ϤW���Ҧ����e',11592: '�|�R���Ҧ��{���\��I',11593: '�W��',11594: '�q�ɮפW��',11595: '�q URL �W��',11596: '�פJ KML...',11597: '�ЦA�դ@��',11598: '����',11599: '�ɮפW����...',11600: '�еy�� \x26mdash; �o�i��n��X�����ɶ��A���z�����s�u���t�צөw�C',11601: '�O��� \x26mdash; �z���ɮפ��b�W�����C �еy�ݡI',11602: '�ڭ̵L�k�����z�n�W�����ɮסC',11603: '�a���٨S�������ܧ�C',11649: '��J���W�a�ϸ�ƪ� URL',11714: '����',11745: '���p�v�]�w',11746: '��L�H�i�b�j�M���G�M�z���ӤH��Ƥ����o���a�ϡC',11755: '�z�T�w�n�R�����a�ϼаO�ܡH',10985: '��j',10986: '�Y�p',11047: '�N�a�ϩ󦹸m��',10983: '�M���j�M���G',10935: '�x�s�ܧڪ��a��',11208: '�s�W�ت��a',11209: '�������ت��a',11271: '���u�_�I',11272: '���u���I',11494: '���ɦ��a��',11495: '�e�X�ܽ�',11496: '�H�r�����j�q�l�l��a�}',11497: '���\����H�s�覹�a��',11498: '��P�@�~��',11499: '��P�@�~�̥i�H�ܽШ�L�H',11500: '����',11501: '�z�T�w�n�H��P�@�~�̪������R�� %1$s�H',11502: '�H��P�@�~�̪������ܽХL�H',11503: '�T�����e�G',11504: '�ڻP�z�@�ΦW�� %1$s ���a�ϡG',11505: '�s�W�z���T�� (��ܩ�)',11506: '�ǰe���ܽШ窺�ƥ�����',11507: '�i���v��',11509: '�R������',11510: '�֦���',11511: '��P�@�~�̥i�H�s��a�Ϩ��ܽШ�L�H�C',11512: '��P�@�~�̥i�H�s��a�ϡC',11513: '�ڦۤv',11514: '�z�T�w�n�R���Ҧ���P�@�~�̡H',11515: '1 ���P�@�~��',11516: '%1$d',11517: '',11533: '���b�ǰe�T��...',11534: '�w�g�ܽШ�P�@�~�̡C',11694: '',11717: '�ܽЦX�@��',11718: '�޲z�X�@��',11719: '�u���֦��̥i�H�ܧ�o�ǳ]�w',1557: 'Google �a��',11023: '�ǰe',11024: '�ǰe��G',11025: '�q�l�l��',11026: '�T��',11027: '�]�t�G',11028: '��T�G',11029: '�`�N�G',11030: '����',11060: '\x3ca href\x3d\x22%1$s\x22\x3e�ԲӤ��e\x3c/a\x3e�C',11066: '�������',11031: 'Google �a�Ϥ䴩�ϥ� \x3ca href\x3d\x22%1$s\x22\x3eBMW Assist\x3c/a\x3e �N��T�ǰe��T���W�C',11032: 'BMW Assist �b��W�١G',11033: '�O���ڪ��b��W��',11034: '�ǰe \x26raquo;',11062: '�ǰe��K',11035: '�T���w���\�ǰe��T���W�I',11036: '�ܳ��p�A�ڭ̵L�k�ǰe�z���q�l�l��C  �гy�X \x3ca href\x3d\x22%1$s\x22\x3eBMW Assist\x3c/a\x3e �æA�դ@���C',11039: '����̡G',11040: '�H��̡G',11041: '�H�r�����j�q�l�l��',11042: '�ǰe�ƥ���ڪ��q�l�l��C',11043: '�T�����e�G',11044: '�]�t���q��T',11045: '�ǰe \x26raquo;',11061: '�H�e�l��K',11063: '�T�����\�H�X�I',11064: '�ܩ�p�A�ڭ̵L�k�ǰe�z���q�l�l��C �еy��A�աC',11074: '�s���G %1$s',11067: '���q�l�l��O�ϥΪ̳z�L %1$s (%2$s) �ǰe���z���C',11075: '�п�����G�K',11076: '�j�M���G',10032: '���u',11077: '\x22%1$s\x22 ���j�M���G',1601: '�樮���u',11079: '�}�l�a�}�G %1$s',11080: '�����a�}�G %1$s',11081: '�ȹC�G %1$s',11082: '�}�l��G %1$s',10118: '��F��G %1$s',11083: '%1$s�s��',11084: '�A�n�A�ڭn�P�A����%1$s�s���C',11085: '��%1$s���r�p���u',11086: 'http://www.bmw.com/myinfo',11087: 'http://maps.google.com/support?hl\x3dzh_TW �C',11364: '�L�Ī��q�l�l��a�}',11396: '��ƥ� %1$s ����',11393: '�uGoogle �a�ϡv��N��T�ǰe��z���ɯ�t�ΡC',11633: '�uGoogle �a�ϡv�i�H�N�T���ǰe�ܰt�� \x3ca href\x3d\x22%1$s\x22\x3eMercedes-Benz \x26amp; ���T���A�ǰe�޳N�� Tele Aid ����\x3c/a\x3e�C',11417: 'http://maps.google.com/support?hl\x3dzh_TW',11459: 'http://maps.google.com/support/?hl\x3dzh_TW',11383: 'BMW ��U��a / �a�ϡG',11395: 'BMW ���a�Q',11385: 'BMW �w��',11386: 'BMW �^��',11387: 'BMW �q�j�Q',11388: 'Mercedes Tele Aid �q�l�l��a�}�G',11389: '�t�P�G',11390: 'BMW',11391: 'Mercedes-Benz',11384: '�п���@��...',11613: '�ܩ�p�A�ڭ̲{�b�L�k�ǰe�z���q�l�l��C �гy�X\x3ca href\x3d\x22%1$s\x22\x3e��������\x3c/a\x3e�C',11394: 'http://www.mbusa.com/searchandsend',11455: '�uGoogle �a�ϡv��N��T�ǰe�� \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e�C',11540: '��J�z�b�U�Ϥ��ݨ쪺�r���C',11541: '�r�����Ϥ��j�p�g�C',11456: 'GPS',11457: '�ǰe�� GPS ...',1935: '�˵����j���a��',11014: '����',11151: '�ФŨϥΤ��A�����r���A�p�G %1$s',10953: '�p�G�z�~�����A�N�|�򥢥��x�s���ܧ�C',11250: '\x3ca href\x3d\x22%1$s\x22\x3e�n�J\x3c/a\x3e�˵��ڲ{��������',11245: '�즲�H�ܧ���u'}
 );
  /* 
   if (!GValidateKey(""))
    {
     G_INCOMPAT = true;
     alert("�������W�ϥΪ� Google �a�� API ���X�w�ѥt�@�Ӻ������U�C �z�i�H�� http://www.google.com/apis/maps/ �����������ͷs�����X�C");
     return;
    }
  */

 GLoadApi(["http://mt0.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt1.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt2.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt3.google.com/mt?n\x3d404\x26v\x3dw2.63\x26"],
          ["http://kh0.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh1.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh2.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh3.google.com/kh?n\x3d404\x26v\x3d23\x26"],
          ["http://mt0.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt1.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt2.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt3.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26"],
          "","","",false,"G");
if (window.GJsLoaderInit)
 {
  GJsLoaderInit("http://www.google.com/intl/zh-TW_ALL/mapfiles/90/maps2" +".api/main.js");
 }
}

function GUnload() 
 {
  if (window.GUnloadApi) 
   {
    GUnloadApi();
   }
 }
var _mF = [ 400,200,false,true,true,false,true,100,4096,"bounds_cippppt.txt","cities_cippppt.txt","local/add/flagStreetView",true,true,400,false,true,true,true,true,false,true,true,true,false,true,"/maps/c/ui/HovercardLauncher/dommanifest.js","no" ];
var _mHost = "http://maps.google.com";
var _mUri = "/maps";
var _mDomain = "google.com";
var _mStaticPath = "http://www.google.com/intl/zh-TW_ALL/mapfiles/";
var _mJavascriptVersion = "91";
var _mTermsUrl = "http://www.google.com/intl/zh-TW_ALL/help/terms_maps.html";
var _mHL = "zh-TW";
var _mGL = "";
var _mTrafficEnableApi = true;
var _mTrafficTileServerUrlBase = "http://www.google.com/mapstt";
var _mCityblockLatestFlashUrl = "http://maps.google.com/local_url?q\x3dhttp://www.adobe.com/shockwave/download/download.cgi%3FP1_Prod_Version%3DShockwaveFlash\x26dq\x3d\x26file\x3dapi";
var _mCityblockLogUsage = true;
var _mWizActions = {hyphenSep: 1,breakSep: 2,dir: 3,searchNear: 6,savePlace: 9};
var _mIdcRouterPath = "/maps/mpl/router";
var _mIdcRelayPath = "/maps/mpl/relay";
var _mIGoogleUseXSS = false;
var _mIGoogleServerUntrustedUrl = "http://gmodules.com";
var _mIGoogleEt = "E34Umadp";
var _mMplGGeoXml = 100;
var _mMplGPoly = 1000;
var _mMplMapViews = 100;
var _mMplGeocoding = 100;
var _mMplDirections = 100;
var _mMplEnableGoogleLinks = true;
var _mIGoogleServerTrustedUrl = "";
var _mIGoogleEt = "E34Umadp";
var _mIGoogleUseXSS = false;
var _mMMEnableAddContent = true;
var _mMSEnablePublicView = true;
var _mSatelliteToken = "fzwq2rdijW-se-twQoKPbGkHtQnswDk2iNF71A";
var _mMapCopy = "�a�ϸ�� \x26#169;2007";
var _mSatelliteCopy = "Imagery \x26#169;2007";
var _mGoogleCopy = "\x26#169;2007 Google";
var _mPreferMetric = false;
var _mPanelWidth = 20;
 var _mMapPrintUrl = 'http://www.google.com/mapprint';
var _mAutocompleteFrom = '�q';
var _mAutocompleteTo = '��';
var _mAutocompleteNearRe = '^(?:(?:.*?)\\s+)(?:(?:�b|�a��|����|����):?\\s+)(.+)$';var _mSvgEnabled = true;
var _mSvgForced = false;
var _mLogInfoWinExp = true;
var _mLogPanZoomClks = false;
var _mLogWizard = true;
var _mLogLimitExceeded = true;
var _mLogPrefs = true;
var _mMMLogMyMapViewpoints = true;
var _mCalPopupMonths = ["�@��","�G��","�T��","�|��","����","����","�C��","�K��","�E��","�Q��","�Q�@��","�Q�G��"];
var _mCalPopupDaysOfWeek = ["�n","�@","�G","��","�|","��","�n"];
var _mSXBmwAssistUrl = '';
var _mSXCarEnabled = true;
var _mSXServices = {car_bmw_at:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11395"},car_bmw_de:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11385"},car_bmw_it:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11387"},car_bmw_gb:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11386"},car_mercedes_us:{type:1,make:"11391",account:"11388",system:"Mercedes-Benz Search\x26amp;Send powered by Tele Aid",link:"11394"}};
var _mMSMarker = '�a�ϼаO';var _mMSLine = '�u��';
var _mMSPolygon = '�Ϊ�';
var _mMSImage = '�Ϥ�';
var _mDirectionsDragging = true;
var _mDirectionsEnableApi = true;
var _mAdSenseForMapsEnable = "true";
var _mAdSenseForMapsFeedUrl = "http://pagead2.googlesyndication.com/afmaps/ads";
function GLoadMapsScript() {if (GBrowserIsCompatible()) {GScript("http://www.google.com/intl/zh-TW_ALL/mapfiles/90/maps2" +".api/main.js");}}
GLoadMapsScript();