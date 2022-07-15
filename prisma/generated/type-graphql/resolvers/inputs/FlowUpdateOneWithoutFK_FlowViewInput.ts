import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFK_FlowViewInput } from "../inputs/FlowCreateOrConnectWithoutFK_FlowViewInput";
import { FlowCreateWithoutFK_FlowViewInput } from "../inputs/FlowCreateWithoutFK_FlowViewInput";
import { FlowUpdateWithoutFK_FlowViewInput } from "../inputs/FlowUpdateWithoutFK_FlowViewInput";
import { FlowUpsertWithoutFK_FlowViewInput } from "../inputs/FlowUpsertWithoutFK_FlowViewInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class FlowUpdateOneWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFK_FlowViewInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFK_FlowViewInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFK_FlowViewInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFK_FlowViewInput | undefined;

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

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_FlowViewInput, {
    nullable: true
  })
  update?: FlowUpdateWithoutFK_FlowViewInput | undefined;
}
