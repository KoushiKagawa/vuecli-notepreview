<template>
  <div>
    <!-- 結果 -->
      <div class="container">
        <div class="main-wrapper">
          <h1>noteシュミレーター</h1>
        </div>

        <!-- input field -->
        <div class ="inputArea">
          <div class="inputAreaTitle">
            <p>
              <input type="text" v-model="title" placeholder="noteのタイトルを記載してください">
            </p>
          </div>
          <div class="inputAreaDescription">
            <p>
              <textarea v-model="description" placeholder="noteの本文を記載してください。"></textarea>
            </p>
          </div>
          <div class="inputAreaCount">
              <p class="inputAreaCountTitle">タイトルは現在<span class="charaCount">{{ charaCount }}</span>文字</p>
              <p class="inputAreaCountDescription">本文は現在<span class="charaCount">{{ charaCountbody }}</span>文字</p>
          </div>
        </div>

        <!-- 結果画面 -->
        <div class="tabs">
          <input id="all" type="radio" name="tab_item" checked>
          <label class="tab_item" for="all">タイムライン</label>
          <input id="programming" type="radio" name="tab_item">
          <label class="tab_item" for="programming">検索結果</label>

          <!-- timeline -->
          <div class="tab_content" id="all_content">
            <div class="tab_content_description">
              
                <div class="noteTimeline">
                    <div class="noteTimelineH2">
                      <h2 id="timeline">noteタイムラインイメージ(PC)</h2>
                    </div>
                    <div class="image"><img src="./assets/images/noteimage.png" class="noteTimelineImage"></div>

                    <!-- 文字数により分岐 -->
                    <h3 class="title" v-if="charaCount <= 155">{{ title }}</h3>
                    <h3 class="title" v-else>{{ title | readMore(155, '...')}}</h3>

                    <!-- 文字数により分岐 -->
                    <div class="description" v-if="charaCountbody <= 183">{{ description }}</div>
                    <div class="description" v-else>{{ description | readMore(188, '...')}}</div>
          
                    <div class="card">
                      <div class="like">
                        <div class="heartSymbol"><i class="far fa-heart"></i></div>
                        <div class="heartCount">123</div>
                      </div>
                      <div class="comment">
                        <div class="commentSymbol"><i class="far fa-comment-alt"></i></div>
                        <div class="commentCount">45</div>
                      </div>
                    </div>
                    <div class="userInfo">
                      <div class="userInfoAvatar">
                        <div class="userInfoImage"><img src="./assets/images/profile.jpg"></div>
                        <div class="userInfoName">noteユーザー</div>
                        <div class="userInfoTime">３時間前</div>
                      </div>
                      <div class="userInfoLike"><i class="far fa-heart"></i></div>
                    </div>
                  </div>  

            </div>
          </div>

          <!-- Search -->
          <div class="tab_content" id="programming_content">
            <div class="tab_content_description">
              
                <div class="noteSearch">
                    <div class="noteSearchH2">
                      <h2 id="search">note検索結果イメージ(PC)</h2>
                    </div>
                    <div class="image"><img src="./assets/images/noteimage_thum.png" class="noteSearchImage"></div>
                    <!-- 文字数により分岐 -->
                    <h3 class="noteSearchtitle" v-if="charaCount <= 52">{{ title }}</h3>
                    <h3 class="noteSearchtitle" v-else>{{ title | readMore(52, '...')}}</h3>

                    <!-- 文字数により分岐 -->
                    <div class="noteSearchDescription" v-if="charaCount <= 74">{{ description }}</div>
                    <div class="noteSearchDescription" v-else>{{ description | readMore(74, '...')}}</div>
                    <div class="card">
                      <div class="like">
                        <div class="heartSymbol"><i class="far fa-heart"></i></div>
                        <div class="heartCount">123</div>
                      </div>
                      <div class="comment">
                        <div class="commentSymbol"><i class="far fa-comment-alt"></i></div>
                        <div class="commentCount">45</div>
                      </div>
                    </div>
                  
                    <div class="userInfo">
                      <div class="userInfoAvatar">
                        <div class="userInfoImage"><img src="./assets/images/profile.jpg"></div>
                        <div class="userInfoName">noteユーザー</div>
                        <div class="userInfoTime">３時間前</div>
                      </div>
                      <div class="userInfoLike"><i class="far fa-heart"></i></div>
                    </div>
          
                  </div>

            </div>
          </div>

        </div>

      </div>    



      <div class="notePreviewAbout">
        <div class="notePreviewAboutBody">
          <p class="notePreviewAboutTitle">このサイトについて</p>
          <div class="notePreviewAboutBox">
            <div class="notePreviewAboutImg"><a href="https://note.mu/koushikagawa" target="_blank"><img src="./assets/images/profile.jpg"></a></div>
            <div class="notePreviewAboutDescription">
              <p>noteのタイムライン、検索結果のプレビューが確認できます。<br>（2019年5月20日時点の情報です）</p>
              <p>作った人：<a href="https://note.mu/koushikagawa" target="_blank">@koushikagawa</a></p>
              <p>このサイトについて、より詳しく<a href="https://note.mu/koushikagawa/n/n7dd46a5e1975" target="_blank">note</a>に書いてますのでぜひご覧ください。</p>
              <p>お問い合わせは↓twitterよりDMください。</p>
              <div class="notePreviewAboutSupport">
                <div class="notePreviewAboutButton">
                  <div class="notePreviewAboutButtonDev">
                    <span class="notePreviewAboutButtonIcon"><i class="fas fa-envelope notePreviewIcon"></i></span>
                    <span class="notePreviewAboutButtontext"><a href="https://twitter.com/koushikagawa" target="_blank">お問い合わせはDMにて</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  

    </div>  
</template>

<script>

export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    clear () {
      this.title = ''
    }
  },
  computed: {
    charaCount: function() {
        return this.title.length;
    },
    charaCountbody: function() {
        return this.description.length;
    }
  },
  filters: {
    readMore: function (text, length, suffix) {
      return text.substring(0, length) + suffix
    }
  }
}
</script>

<style
  lang="css"
  src="@/assets/css/style.css"
  scoped
/>
