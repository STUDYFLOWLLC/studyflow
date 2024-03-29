import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateNestedManyWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateNestedManyWithoutFK_FlashcardStackInput";
import { FlowCreateNestedOneWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlashcardStacksInput";
import { RepetitionCreateNestedOneWithoutFK_FlashcardStackInput } from "../inputs/RepetitionCreateNestedOneWithoutFK_FlashcardStackInput";

@TypeGraphQL.InputType("FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput", {
  isAbstract: true
})
export class FlashcardStackCreateWithoutFK_FlashcardStackReviewsInput {
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

  @TypeGraphQL.Field(_type => RepetitionCreateNestedOneWithoutFK_FlashcardStackInput, {
    nullable: true
  })
  FK_Repetition?: RepetitionCreateNestedOneWithoutFK_FlashcardStackInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;
}
