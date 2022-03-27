import { Box, Flex } from "@chakra-ui/react";

import PageLayout from "@components/layouts/PageLayout";
import ObjectsMenu from "@components/ObjectsMenu";
import PageTags from "@components/PageTags";
import FieldsSection from "@modules/NewObject/components/FieldsSection";
import TitleSlugSection from "@modules/NewObject/components/TitleSlugSection";
import TypeSelectorSection from "@modules/NewObject/components/TypeSelectorSection";

const pageTagsProps = {
  title: "New Object",
  description: "Page description",
};

export default function NewObjectPage() {
  return (
    <PageLayout>
      <PageTags {...pageTagsProps} />
      <Flex>
        <ObjectsMenu />
        <Box>
          <Flex>
            <TitleSlugSection />
            <TypeSelectorSection />
          </Flex>
          <FieldsSection />
        </Box>
      </Flex>
    </PageLayout>
  );
}
