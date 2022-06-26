import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlashCardStacksInput";
import { FlowCreateWithoutFK_FlashCardStacksInput } from "../inputs/FlowCreateWithoutFK_FlashCardStacksInput";
import { FlowUpdateWithoutFK_FlashCardStacksInput } from "../inputs/FlowUpdateWithoutFK_FlashCardStacksInput";
import { FlowUpsertWithoutFK_FlashCardStacksInput } from "../inputs/FlowUpsertWithoutFK_FlashCardStacksInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_FlashCardStacksInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_FlashCardStacksInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlashCardStacksInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_FlashCardStacksInput | undefined;

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

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlashCardStacksInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_FlashCardStacksInput | undefined;
}
