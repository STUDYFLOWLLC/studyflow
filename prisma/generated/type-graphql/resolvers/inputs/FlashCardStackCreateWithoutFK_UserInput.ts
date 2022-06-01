import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardCreateNestedManyWithoutFK_FlashCardStackInput } from "../inputs/FlashCardCreateNestedManyWithoutFK_FlashCardStackInput";
import { FlowCreateNestedOneWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateNestedOneWithoutFK_FlashCardStacksInput";

@TypeGraphQL.InputType("FlashCardStackCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedOneWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  FK_Flow?: FlowCreateNestedOneWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardCreateNestedManyWithoutFK_FlashCardStackInput, {
    nullable: true
  })
  FlashCards?: FlashCardCreateNestedManyWithoutFK_FlashCardStackInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;
}
