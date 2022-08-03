import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_RepetitionsInput } from "../inputs/FlowCreateOrConnectWithoutFK_RepetitionsInput";
import { FlowCreateWithoutFK_RepetitionsInput } from "../inputs/FlowCreateWithoutFK_RepetitionsInput";
import { FlowUpdateWithoutFK_RepetitionsInput } from "../inputs/FlowUpdateWithoutFK_RepetitionsInput";
import { FlowUpsertWithoutFK_RepetitionsInput } from "../inputs/FlowUpsertWithoutFK_RepetitionsInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_RepetitionsInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_RepetitionsInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_RepetitionsInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_RepetitionsInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_RepetitionsInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_RepetitionsInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_RepetitionsInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_RepetitionsInput | undefined;

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

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_RepetitionsInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_RepetitionsInput | undefined;
}
