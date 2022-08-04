import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFlashcardStackArgs } from "./args/AggregateFlashcardStackArgs";
import { CreateFlashcardStackArgs } from "./args/CreateFlashcardStackArgs";
import { CreateManyFlashcardStackArgs } from "./args/CreateManyFlashcardStackArgs";
import { DeleteFlashcardStackArgs } from "./args/DeleteFlashcardStackArgs";
import { DeleteManyFlashcardStackArgs } from "./args/DeleteManyFlashcardStackArgs";
import { FindFirstFlashcardStackArgs } from "./args/FindFirstFlashcardStackArgs";
import { FindManyFlashcardStackArgs } from "./args/FindManyFlashcardStackArgs";
import { FindUniqueFlashcardStackArgs } from "./args/FindUniqueFlashcardStackArgs";
import { GroupByFlashcardStackArgs } from "./args/GroupByFlashcardStackArgs";
import { UpdateFlashcardStackArgs } from "./args/UpdateFlashcardStackArgs";
import { UpdateManyFlashcardStackArgs } from "./args/UpdateManyFlashcardStackArgs";
import { UpsertFlashcardStackArgs } from "./args/UpsertFlashcardStackArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { FlashcardStack } from "../../../models/FlashcardStack";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFlashcardStack } from "../../outputs/AggregateFlashcardStack";
import { FlashcardStackGroupBy } from "../../outputs/FlashcardStackGroupBy";

@TypeGraphQL.Resolver(_of => FlashcardStack)
export class FlashcardStackCrudResolver {
  @TypeGraphQL.Query(_returns => FlashcardStack, {
    nullable: true
  })
  async flashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => FlashcardStack, {
    nullable: true
  })
  async findFirstFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlashcardStack], {
    nullable: false
  })
  async flashcardStacks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFlashcardStackArgs): Promise<FlashcardStack[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: false
  })
  async createFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateFlashcardStackArgs): Promise<FlashcardStack> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFlashcardStackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: true
  })
  async deleteFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: true
  })
  async updateFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateFlashcardStackArgs): Promise<FlashcardStack | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFlashcardStackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFlashcardStackArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => FlashcardStack, {
    nullable: false
  })
  async upsertFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertFlashcardStackArgs): Promise<FlashcardStack> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateFlashcardStack, {
    nullable: false
  })
  async aggregateFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFlashcardStackArgs): Promise<AggregateFlashcardStack> {
    return getPrismaFromContext(ctx).flashcardStack.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [FlashcardStackGroupBy], {
    nullable: false
  })
  async groupByFlashcardStack(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFlashcardStackArgs): Promise<FlashcardStackGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).flashcardStack.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
