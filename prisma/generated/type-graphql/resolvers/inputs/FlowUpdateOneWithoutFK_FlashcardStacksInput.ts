import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlashcardStacksInput";
import { FlowCreateWithoutFK_FlashcardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashcardStacksInput";
import { FlowUpdateWithoutFK_FlashcardStacksInput } from "../inputs/FlowUpdateWithoutFK_FlashcardStacksInput";
import { FlowUpsertWithoutFK_FlashcardStacksInput } from "../inputs/FlowUpsertWithoutFK_FlashcardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_FlashcardStacksInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_FlashcardStacksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_FlashcardStacksInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlashcardStacksInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_FlashcardStacksInput | undefined;
}
