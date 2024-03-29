import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateNestedManyWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateNestedManyWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput";
import { FlowCreateNestedOneWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlashcardStacksInput";

@TypeGraphQL.InputType("FlashcardStackCreateWithoutFK_RepetitionInput", {
  isAbstract: true
})
export class FlashcardStackCreateWithoutFK_RepetitionInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FlashcardStackID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateNestedManyWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_Flashcards?: FlashcardCreateNestedManyWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_FlashcardStackReviews?: FlashcardStackReviewCreateNestedManyWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;
}
