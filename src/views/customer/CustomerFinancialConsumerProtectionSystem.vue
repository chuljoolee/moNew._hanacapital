<script>
// Customer_M09_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue'; //240729 추가

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicButton, //240729 추가
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호체계');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>금융소비자보호조직</PageMainText>
      <PageSubText>
        하나캐피탈은 상품개발 및 판매, 사후관리에 대한 내부준칙을 마련하여
        소비자보호 체계를 구축하 여 소비자의 관점에서 제도를 운영하고 있습니다.
      </PageSubText>
    </PageTextGroup>

    <div>
      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-item">
            금융소비자보호 규정
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--small-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                소비자보호 체계 구축
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상품 개발 과정의 소비자보호<br />
                (개발단계/판매단계/사후처리단계)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상품 판매 과정의 소비자보호
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상품 판매 이후의 소비자보호
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                정보제공 강화를 통한 소비자 보호
              </div>
            </li>
          </ul>
          <!-- S: 240728 추가 -->
          <BasicButton class="moreView" :line="true"
            >제정·개정 이력 자세히보기</BasicButton
          >
          <!-- //E: 240728 추가 -->
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-item">
            민원처리프로세스
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--small-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                민원접수방법<br />
                (홈페이지/전화(1800-1110)/우편 및 방문/ 팩스)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                민원처리 과정<br />
                (민원접수→민원담당자 지정→민원처리→민원회신)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                정상적으로 접수된 민원은 14일 이내(영업일 기준) 답변 및 처리를
                원칙으로 합니다.
              </div>
            </li>
          </ul>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-item">
            상품개발프로세스
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--small-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                신상품 개발 및 마케팅 정책 수립 시 주관부서와 금융소비자보호
                총괄부서간 사전 협의를 의무화하고 소비자권익침해 가능성이 있는
                경우 주관부서에 신상품출시 및 마케팅 중단을 요구 하는 등 소비자
                의견을 반영하기 위해 노력합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상품개발체크리스트를 통한 소비자 불이익 사항을 점검합니다.
              </div>
            </li>
          </ul>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-item">
            상품판매준칙
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--small-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                소비자에게 충분한 정보 제공으로 불완전판매를 방지한다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상품관련 중요 사항을 소비자가 이해하기 쉽게 설명한다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                회사의 우월적 지위를 남용하거나 소비자 권익을 침해하는 행위를
                하지 않는다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                소비자가 적합한 금융상품을 구매하도록 최선의 노력을 다한다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인정보의 수집 및 활용이 필요한 경우 목적에 부합하는 최소한의
                정보만 수집활용한다.
              </div>
            </li>
          </ul>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-item">
            민원사무처리 지침
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--small-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                민원을 신속하고 공정하게 처리하여 민원인의 불만 해소에 최선의
                노력을 다합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                다른 법령에 특별한 규정이 없는 한 민원접수를 보류하거나 거부하지
                않습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                고객 민원 발생시 민원인의 개인 정보 보호를 위해 최선의 노력을
                다합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                발생된 민원에 대해서는 즉각적으로 소비자 불만 내용을 파악하고
                대응합니다.
              </div>
            </li>
          </ul>
        </BasicBox>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionSystem.scss';
</style>

<!-- S: 240729 추가 -->
<style lang="scss" scoped>
.moreView {
  min-height: 42px;
  max-height: 42px;
  margin-top: 20px;
  font-size: 13px;
  line-height: 13px;
}
</style>
<!-- //E: 240729 추가 -->
