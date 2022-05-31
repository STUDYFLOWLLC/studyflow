import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateNestedManyWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateNestedManyWithoutFK_FlashCardStackInput";
import { FlowCreateNestedOneWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlashCardStacksInput";
import { UserCreateNestedOneWithoutFK_FlashCardStacksInput } from "../inputs/UserCreateNestedOneWithoutFK_FlashCardStacksInput";

@TypeGraphQL.InputType("FlashCardStackCreateInput", {
  isAbstract: true
})
export class FlashCardStackCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardCreateNestedManyWithoutFK_FlashCardStackInput, {
    nullable: true
  })
  FK_Flashcards?: FlashCardCreateNestedManyWithoutFK_FlashCardStackInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;
}
