import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowTagOnFlowCreateManyFK_FlowTagInput } from "../inputs/FlowTagOnFlowCreateManyFK_FlowTagInput";

@TypeGraphQL.InputType("FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope", {
  isAbstract: true
})
export class FlowTagOnFlowCreateManyFK_FlowTagInputEnvelope {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowCreateManyFK_FlowTagInput], {
    nullable: false
  })
  data!: FlowTagOnFlowCreateManyFK_FlowTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
