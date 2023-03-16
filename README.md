# fe-max--wise-wallet


# 영역 구분
- [x] 헤더
- [x] 새로운 내역 입력
- [x] 수입지출 내역 목록
- [] 달력 화면
- [] 통계 화면
# 요구사항
- [] 시맨틱 태그를 잘 써보자!
- [] 마우스 포커싱?
## 헤더
- [x] 가계부의 모든 화면에서 상단 중앙에 표시
- [x] 로고, 캘린더, 통계탭으로 구성된다
### 로고
- [x] 로고는 헤더의 왼쪽에 위치한다
- [x] 로고를 클릭하면 메인 화면으로 이동한다
- [x] 로고는 h1태그로 감싼다
### 캘린더
- [x] 캘린더는 헤더 중앙에 위치한다
- [x] 상단부터 year, month, month 이름 순으로 배치한다
- [x] 좌우에는 화살표를 위치시킨다
- [x] 화살표를 클릭하면 이전달 or 다음달로 이동한다
- [] 화살표를 통해 이동하면 하단의 내역도 변경된다 
### 통계
- [x] 통계탭은 헤더 오른쪽에 위치한다
- [x] 내역, 달력, 통계 아이콘으로 구성한다
- [x] 각 아이콘을 누르면 해당 화면으로 
이동한다

---

## 새로운 내역 입력
- [x] 헤더 아래에 절반을 걸쳐 위치한다 
- [] 수입과 지출 내역 입력을 담당한다 
- [x] 날짜 인풋 박스, 금액 입력 인풋, 내용 입력 인풋, 결제 수단 셀렉트 박스, 분류 셀렉트 박스, 확인 버튼 으로 구성된다
- [x] 셀렉트 박스는 커스텀한다

### 날짜 인풋 박스
- [x] 오늘 날짜를 기본으로 설정한다
- [x] 수정할 수 있다

### 금액 입력 인풋
- [x] +,- 전환 버튼 구역, 금액 입력 구역으로 나뉘어져 있다
#### +- 전환버튼
- [x] - 를 기본값으로 설정한다
- [] + 상태에서는 분류 셀렉트 박스의 드롭다운이 "수입 카테고리"로 변경된다
- [] - 상태에서는 분류 셀렉트 박스의 드롭다운이 "지출 카테고리"로 변경된다 
- [x] 드롭다운 패널 역시 지출이 기본값이다
#### 금액 입력
- [x] 금액을 입력할 땐 세자리 마다 쉼표가 찍힌다

### 내용 입력 인풋
- [x] 해당 내역에 대한 설명을 적을 수 있다 
- [] 모달창..??

### 결제 수단 셀렉트 박스
- [x] 셀렉트 박스 영역을 클릭하면 결제 수단 드롭다운 패널이 나타난다
- [x] 기본적으로 현금과 신용카드 결제수단이 있고, 마지막에 추가하기 버튼으로 구성한다
- [x] 각 결제수단 항목 옆에는 X버튼이 있다 
    - [] 삭제 버튼을 누르면 해당 결제 수단이 삭제된다
    - [] 삭제한 결제수단으로 작성된 수입 지출내역은 빈칸으로 남는다 ?? 
- [x] 추가하기 버튼을 누르면 모달창이 뜬다 
    - [x] 추가하기 버튼을 통한 모달창에는 결제 수단을 입력하는 텍스트 인풋, 취소버튼, 등록 버튼이 있다 
    - [x] 등록버튼을 누르면 결제 수단 드롭다운에 추가된다
    - [x] 아무 것도 입력하지 않은 경우 추가되지 않는다
    - [] 아무 것도 입력하지 않은 경우 인풋박스에 포커스가 된다

### 분류 셀렉트 박스
- [] 금액의 + - 상태에 따라 수입 카테고리와 지출 카테고리로 나타난다
- [x] 수입 카테고리 : 월급, 용돈, 기타수입
- [x] 지출 카테고리 : 식비, 생활, 쇼핑/뷰티, 교통, 의료/건강, 문화/여가, 미분류

### 확인 버튼
- [] 확인 버튼을 누르면 수입지출 내역이 저장된다 (??어디)
- [x] 내역 목록에 입력한 내용이 추가된다

---

## 수입지출 내역 목록
- [] 총 건수와 해당월의 수입액, 지출액이 표시된다
- [x] 수입액 지출액 앞에는 체크박스가 있디
- [] 체크박스는 수입액 또는 지출액 필터링 기능을 한다
- [] 기본적으로 수입액, 지출액 둘 다 보여진다

- [] 수입 지출 리스트는 '일자'를  기준으로 최신순으로 정렬한다
- [] 같은 일자라면 생성된 '시간'을 기준으로 정렬한다

- [x] 날짜당 날짜, 요일, 수입, 지출이 상단영역이다
- [x] 내역에는 분류 카테고리 명, 입력한 내용, 결제 수단, 수입 혹은 지출액으로 구성한다
- [x] 지출내역은 빨간색, 수입내역은 초록으로 표시한다

- [x] 각 내역에 마우스를 올리면 배경을 #ffffff로 변경한다
- [x] 오른쪽에 삭제하기 버튼을 만든다 

- [] 삭제하기 버튼을 누르면 수입지출내역을 삭제할 수 있는 alert창을 띄운다
- [] alert창은 삭제 안내문구, 카테고리, 내용, 결제수단, 금액, 취소버튼, 삭제버튼으로 구성한다
- [] 삭제 버튼을 누르면 해당 내역이 삭제된다
- [] 수입 지출 각 내역에 마우스를 올린 상태로 삭제하기 버튼 외의 영역을 클릭하면 **새로운 내역 입력** 영역에 해당 내역이 입력 바에 채워지고 수정이 가능하도록 한다
    - [] 만약 기존 내용에 수정 사항이 생기면, 확인버튼이 활성화된다
    - [] 확인 버튼을 누르면 입력바는 비워지고 기존 내용에는 수정사항이 반영된다

### 인풋바 기능
- [x] 새로운 내역 입력
  - [x] + - 여부에 따라 셀렉트 박스 구성이 바뀌어야 한다
  - [x] 인풋바는 모든 내용을 전부 입력해야 등록할 수 있다
  - [x] 모든 내용이 비어있지 않고 입력되면 추가 버튼이 활성화된다
  - [] 내용은 저장된다
    - [x] 항목 등록
      - [x] 인풋바 내용을 전부 입력하면 리스트로 등록가능
    - [] 항목 수정
      - [] 리스트에 삭제하기 이외 부분을 누르면 인풋바가 해당 내용들로 채워진다
      - [] 만약 기존 내용에 수정 사항이 생기면, 확인버튼이 활성화된다
      - [] 확인 버튼을 누르면 입력바는 비워진다
      - [] 인풋바에 내용 수정시 기존의 하단 리스트도 수정
    - [] 항목 삭제
      - [] 삭제버튼을 누르면 삭제 여부를 확인하는 alert창
      - [] 취소시 alert창 닫힘
      - [] 삭제 버튼 클릭시 해당 항목 삭제

- [] 수입 지출 내역 목록
  - [x] 총 건수 
  - [x] 랜더링
    - [x] 저장된 inputStore의 arr를 while이나 for, map, filter, reduce 로 type이 false면 지출, true면 수입으로 모아 합산한다
  - [] 일별 info head
    - [] 날짜 표시 month월 day일 dayname
    - [] 하위 노드의 수입 지출 정보
  - [] 일별 body
    - [] 카테고리, memo, 결제수단, 금액
      - [] false면 '-' + '금액' + '원' - 색상변경 잊지않기
      - [] true면 '금액' + '원' - 색상변경 잊지않기
  - [] 수입/지출 필터링에 따른 목록 랜더링
    - [] 수입노드, 지출노드 체크 여부에 따라 전체를 모아 렌더링
    - [] 초기상태는 둘 다 체크된 상태


---

## 캘린더

- [] 요일, 캘린더 영역, 총합 으로 나뉜다
- [] 요일은 새로운 내역 입력 박스 위치와 동일
- [] 오늘 날자에 해당하는 날은 배경색이 다르다
- [] 수입, 지출, 일별 합계는 각각 다른 색으로 표시
- [] 달력 하단에는 해당 월의 총 수입, 총 지출, 총합을 표시한다

---

## 통계화면

- [] 그래프, 총 지출액, 상세 내역, 접혀져 있는 상세 카테고리 영역 구분한다
- [] 총 지출액에 총 지출 금액을 표시한다
- [] 상세 내역은 카테고리 명, 비율, 해당 카테고리의 지출합으로 구성한다
- [] 가장 비율이 큰 카테고리 순으로 정렬한다

- [] 리스트 아이템을 클릭하면 해당 카테고리의 월별 소비추이 그래프와 상세 내역이 펼쳐진다
- [] 소비추이 그래프는 해당 카테고리의 최근 6개월 지출 내역으로 구성한다
- [] 상세내역은 메인 내역과 방식이 동일하다
    - [] 오른쪽 상단에 일별 지출 총액은 보여지지 않는다 
    - [] 카테고리 명, 입력한 내역, 결제 방식, 지출내역



---

## CSS Flexbox

## 시맨틱 태그 SEO
검색엔진최적화(Search Engine Optimization, SEO)는 사용자의 검색의도를 명확히 이해하여 고객니즈 기반으로 웹사이트의 기능을 개선, 콘텐츠를 제작하는 방법

즉, 단순히 검색엔진의 로직에만 맞추는 것이 아니라 웹사이트의 품질, 콘텐츠의 질이 함께 개선되어야 페이지 퀄리티가 높아져서 실질적인 효과를 거둘 수 있다

이런 이유로 검색엔진의 기술적인 요건을 만족하기 위한 ①테크니컬 seo, 키워드 리서치를 통해 콘텐츠의 질을 높이기 위한 ②콘텐츠 seo, 검색엔진과 인터넷의 가장 중요한 원리인 내 웹사이트 링크 확산을 목적으로 하는 ③링크빌딩 seo로 분류가 되고 이에 따른 전문화된 프로세스가 있다

### 테크니컬 SEO

검색엔진 제목, 메타태그는 테크니컬 seo 요소 중 가장 중요한 항목


## 폰트 파일
@import방식보다 link를 선호하는 이유

## 클래스 붙여주기
태그를 선택하지 않고 클래스를 붙여 css선택자로 만들어주는 이유?

## nav패턴

## 사용자 지정 CSS 속성 사용하기 (변수)

## ARIA(Accessible Rich Internet Applicaitons)

## aria-label
우리 눈에 보이지 않더라도 브라우저에게는 전달이 되면 좋은 정보, 혹은 스크린 리더를 통해 웹을 사용하는 사용자들에게 전달해야 하는 정보를 제공하고 싶을 때 사용하는 게 aria-label

## 웹접근성
법적 관점에서의 웹 접근성은‘모든 사용자가 신체적·환경적 조건에 관계없이 웹에 접근하여 이용할 수 있도록 보장하는 것’

WCAG 2의 개요:장애인이 웹 콘텐츠에 보다 쉽게 접근할 수 있도록 하는 방법에 대한 요구사항을 정의하는 국제 표준을 도입

### 체크할 필요가 있는 요소
Nvda 스크린리더

- [] 이미지(img) 요소의 정보는 대체 텍스트(alt값)로 빠짐없이 입력

- [] 배경 이미지와 같이 장식의 목적의 이미지는 <alt="">와 같이 대체 텍스트를 빈값으로 넣어서 스크린리더에서 읽히지 않게한다

- [] 더보기, 펼침 기능을 하는 버튼 기능을 하는 특수문자는 기능과 상태 정보를 제공하고, 상승/하락 등 특수 문자의 의미를 정확히 이해할 수 있는 대체 텍스트를 제공

- [] 버튼의 기능을 명확히 이해할 수 있는 대체 텍스트를 제공

- [] 화면을 가리는 모달창, 레이어 팝업의 경우 가장 먼저 초점(focus)을 받게 해야한다

- [] 링크, 사용자 입력, 기타 컨트롤 등이 안쪽 여백은 1px 이상의 여백을 두는 것이 좋다

## form - 필드셋, 레전드와 그냥 label input 차이?
form 관련 요소들은 동적인 웹 페이지를 위해서는 반드시 필요한 요소

- fieldset : form 내부에서 관계된 요소들끼리 묶어주며 그룹화 하는데 그룹화 된 주위에 얇은 테두리를 이용하여 박스를 그린다.
주로 해당 그룹의 이름을 정할 수 있는 legend와 함께 쓰인다

- legend : fieldset에 제목을 달아주는 역할

## button type=button 을 입력해주는 이유

type이 없는 상태의 버튼은 기본적으로 submit 타입을 가진다
따라서 type bytton이 없는 버튼을 클릭시 페이지가 재렌더링된다
이를 방지하고 본래의 목적대로 쓰기 위해 type을 명시해주자

# 마스터 클래스
## html 시맨틱
의도를 나타내는 태그

구글 봇이 보고다님

화면 판독기가 대신 읽음 


![컨벤션에는](https://user-images.githubusercontent.com/86706366/223628013-34f834b9-a84d-4417-a431-051319468029.png)
컨벤션에는 why가 필요하다 - 최소한! 나는 이게 편했어~ 여도 이유를 써주자

루카스 깃허브 확인해보기

wcag 2.1 korean

wcag legal

aoda

# 디버깅
## 메소드찾기
컨 + 쉬프트 + p
## 요소 크기 측정
컨 + 쉬프트 + p > ruler
## scroll into view
요소에 해당하는 화면으로 이동
## force state
상태 강제 : 호버 등
## break on
조건에 따라 멈추기
ex 하위 요소가 바뀐다면~ 
ex 해당 js코드로 이동 가능
## node정보 파악
요소 > 프로퍼티
## 주변 노드 탐색 !
elDiv.firstChild 첫번째 자식 `<ul></ul>`보여줌
- 공백을 감지하기 때문에 #text로 들어온다
elDiv.childNodes 자식의 자식 노드까진 찾지 못한다
- [ul, text] 형태로 들어옴
elDiv.firstElementChild
- 텍스트 노드를 제외하고 엘리먼트 노드를 찾아준다

## 노드 타입
- 엘리먼트 노드 element_node = div, p
- 텍스트 노드 text_node = attribute나 element의 텍스트
nodeType을 통해 알 수 있음 
1 = element 
3 = texts
## 노드 추가

## 이벤트 위임
이벤트 위임을 사용하면 요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다룰 수 있다

이벤트 위임은 다음과 같은 알고리즘으로 동작

1. 컨테이너에 하나의 핸들러를 할당
2. 핸들러의 event.target을 사용해 이벤트가 발생한 요소가 어디인지 알아낸다
3. 원하는 요소에서 이벤트가 발생했다고 확인되면 이벤트를 핸들링한다

### 이벤트 위임의 장점
많은 핸들러를 할당하지 않아도 되기 때문에 초기화가 단순해지고 메모리가 절약된다
요소를 추가하거나 제거할 때 해당 요소에 할당된 핸들러를 추가하거나 제거할 필요가 없기 때문에 코드가 짧아진다
innerHTML이나 유사한 기능을 하는 스크립트로 요소 덩어리를 더하거나 뺄 수 있기 때문에 DOM 수정이 쉬워진다
### 이벤트 위임의 단점
- 이벤트 위임을 사용하려면 이벤트가 반드시 버블링 되어야 한다
- 하지만 몇몇 이벤트는 버블링 되지 않는다
- 낮은 레벨에 할당한 핸들러엔 event.stopPropagation()를 쓸 수 없다
- 컨테이너 수준에 할당된 핸들러가 응답할 필요가 있는 이벤트이든 아니든 상관없이 모든 하위 컨테이너에서 발생하는 이벤트에 응답해야 하므로 CPU 작업 부하가 늘어날 수 있다    
**이런 부하는 무시할만한 수준이므로 실제로는 잘 고려하지 않는다**

# 이벤트 버블링
거의 모든 이벤트는 버블링된다
focus 이벤트와 같이 버블링 되지 않는 이벤트도 있다

이벤트가 발생한 가장 안쪽의 요소는 타깃(target) 요소라고 불리고, event.target을 사용해 접근할 수 있다

## event.target과 this(=event.currentTarget)의 차이점
event.target 
- 실제 이벤트가 시작된 ‘타깃’ 요소입니다. 버블링이 진행되어도 변하지 않는다
this(=event.currentTarget)
- ‘현재’ 요소로, 현재 실행 중인 핸들러가 할당된 요소를 참조(핸들러가 실제 할당된 요소)

    form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);
    };

this(event.currentTarget) – form 요소에 있는 핸들러가 동작했기 때문에 form 요소를 가리킨다
event.target – 폼 안쪽에 실제 클릭한 요소를 가리킨다
## 버블링 중단
이벤트 버블링은 타깃 이벤트에서 시작해서 html 요소를 거쳐 document 객체를 만날 때까지 각 노드에서 모두 발생   
몇몇 이벤트는 window 객체까지 거슬러 올라가기도 하며 이때 모든 핸들러가 호출   
event.stopPropagation()을 통해 막을 수 있으나   
꼭 필요한 경우를 제외하곤 버블링을 막지 말아야한다   
버블링을 막아야 해결되는 문제라면 커스텀 이벤트 등을 사용해 문제를 해결할 수 있다
## 이벤트 캡처링
캡처링 단계에서 이벤트를 잡아내려면 addEventListener의 capture 옵션을 true로 설정
elem.addEventListener(..., {capture: true})
// 아래 같이 {capture: true} 대신, true를 써줘도 된다
elem.addEventListener(..., true)

false이면(default 값) 핸들러는 버블링 단계에서 동작
true이면 핸들러는 캡처링 단계에서 동작

캡처링과 버블링 단계의 핸들러는 타깃 단계에서 트리거

## 키 이벤트 작동 시점
keypress(deprecated), keydown, keyup   
키보드 이벤트(Keyboard Event)는 사용자가 키를 누르거나 키를 놓을 때 발생   
키를 누를 때는 keydown 타입의 이벤트가 발생하고, 키를 놓을 때는 keyup 타입의 이벤트가 발생
### 
preventDefault()는 keyup이벤트에서 발생하지 않는다 
keyup은 디폴트 이벤트가 이미 발생한 상태에서 일어나기 때문에 디폴트 이벤트를 막는 preventDefault를 호출하기에 늦은 것이다

## BEM방식 CSS 명명규칙

## append 와 appendchild 

## classlist.add("","") 여러개 가능

## 메모리와 로컬스토리지의 차이
