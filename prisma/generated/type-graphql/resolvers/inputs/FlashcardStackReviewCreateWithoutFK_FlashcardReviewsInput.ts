import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput } from "../inputs/FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput";

@TypeGraphQL.InputType("FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput", {
  isAbstract: true
})
export class FlashcardStackReviewCreateWithoutFK_FlashcardReviewsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackReviewID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  EndTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackCreateNestedOneWithoutFK_FlashcardStackReviewsInput | undefined;
}
