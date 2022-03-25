import PageLayout from "@components/layouts/PageLayout";
import ObjectsMenu from "@components/ObjectsMenu";
import PageTags from "@components/PageTags";
import { useEffect } from "react";
import { getAllObjects } from "src/services/objects";
import { useObjectsStore } from "src/stores/objectsStore";

const pageTagsProps = {
  title: "Page title",
  description: "Page description",
};

export default function Home() {
  const { objects, setObjects } = useObjectsStore();

  useEffect(() => {
    getAllObjects().then(res => {
      setObjects(res as any[]);
    });
  }, []);

  return (
    <PageLayout>
      <PageTags {...pageTagsProps} />
      <ObjectsMenu />
    </PageLayout>
  );
}
