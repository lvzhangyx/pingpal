import React from "react";

export default function PingPalHomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="flex items-center justify-between p-4 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">PingPal</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-blue-500">首页</a>
          <a href="#">约球</a>
          <a href="#">商城</a>
          <a href="#">社区</a>
          <a href="#">我的</a>
        </nav>
      </header>

      <section className="bg-blue-100 p-6 text-center">
        <h2 className="text-3xl font-semibold mb-2">乒乓连接你我</h2>
        <p className="text-gray-700 mb-4">找球友 · 买器材 · 晒生活，一站式乒乓社区</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">立即加入</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">🏓 找球搭子</h3>
          <p>基于地理位置与兴趣匹配，快速找到附近可约球的球友</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">🛒 器材商城</h3>
          <p>精选拍子、胶皮、球包等配件，支持租借和拼团</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">📸 分享动态</h3>
          <p>发布打球日常、球拍测评、赛事记录，参与讨论互动</p>
        </div>
      </section>

      <section className="p-6">
        <h4 className="text-2xl font-semibold mb-4">🔥 热门推荐</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="https://source.unsplash.com/400x250/?pingpong" alt="搭子" />
            <div className="p-3">
              <h5 className="font-bold">附近球搭 | 张三（4.5分）</h5>
              <p className="text-sm text-gray-500">今晚南门场地求搭子～</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="https://source.unsplash.com/400x250/?table-tennis-equipment" alt="商城" />
            <div className="p-3">
              <h5 className="font-bold">蝴蝶Vis ALC + D05 套装</h5>
              <p className="text-sm text-gray-500">限时拼团，立减100元</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="https://source.unsplash.com/400x250/?sports-community" alt="动态" />
            <div className="p-3">
              <h5 className="font-bold">【晒拍】新入手的银纤维定制拍！</h5>
              <p className="text-sm text-gray-500">by @球感小王子</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-3 text-sm text-gray-600">
        <div className="flex flex-col items-center"><span>🏠</span><span>首页</span></div>
        <div className="flex flex-col items-center"><span>🤝</span><span>约球</span></div>
        <div className="flex flex-col items-center"><span>🛍️</span><span>商城</span></div>
        <div className="flex flex-col items-center"><span>📷</span><span>社区</span></div>
        <div className="flex flex-col items-center"><span>👤</span><span>我的</span></div>
      </footer>
    </div>
  );
}
